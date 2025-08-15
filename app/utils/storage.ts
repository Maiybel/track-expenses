import AsyncStorage from '@react-native-async-storage/async-storage';

export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: string;
};

export async function saveExpense(expense: Expense) {
  try {
    const existing = await AsyncStorage.getItem('expenses');
    const expenses: Expense[] = existing ? JSON.parse(existing) : [];
    expenses.push(expense);
    await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
  } catch (error) {
    console.error('Error saving expense:', error);
  }
}

export async function getExpenses(): Promise<Expense[]> {
  try {
    const data = await AsyncStorage.getItem('expenses');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading expenses:', error);
    return [];
  }
}
export async function clearExpenses() {
  try {
    await AsyncStorage.removeItem('expenses');
  } catch (error) {
    console.error('Error clearing expenses:', error);
  }
}
