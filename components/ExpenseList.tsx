import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { Expense } from "../app/utils/storage"; // adjust path if needed

type ExpenseListProps = {
  expenses: Expense[];
};

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({ item }) => (
        <ExpenseItem
          description={item.description}
          amount={item.amount}
          date={item.date}
        />
      )}
    />
  );
}
