import { View, Text, StyleSheet } from "react-native";

type ExpenseItemProps = {
  description: string;
  amount: number;
  date: string;
};

export default function ExpenseItem({ description, amount, date }: ExpenseItemProps) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.amount}>₦{amount.toFixed(2)}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF5733",
  },
});
