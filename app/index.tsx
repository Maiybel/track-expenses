import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getExpenses } from './utils/storage';

export default function HomeScreen() {
  const [total, setTotal] = useState(0);

  const loadTotal = async () => {
    const expenses = await getExpenses();
    const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    setTotal(totalAmount);
  };

  useFocusEffect(
    useCallback(() => {
      loadTotal();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Expenses</Text>
      <Text style={styles.amount}>₦{total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  amount: { fontSize: 32, color: 'red', fontWeight: 'bold' },
});

