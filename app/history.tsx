import { useCallback, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, View } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { clearExpenses, Expense, getExpenses } from '../app/utils/storage';
import ExpenseItem from '../components/ExpenseItem';

export default function HistoryScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const router = useRouter();

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadExpenses();
    }, [])
  );

  const handleClear = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to clear all expenses?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes, Clear',
          style: 'destructive',
          onPress: async () => {
            await clearExpenses();
            setExpenses([]);
            router.replace('/'); // go back to home
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem
            description={item.description}
            amount={item.amount}
            date={item.date}
          />
        )}
      />
      <View style={{ marginTop: 10 }}>
        <Button title="Clear All Expenses" color="red" onPress={handleClear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
});
