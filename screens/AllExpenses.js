import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";

export default function AllExpeneses() {
    const expenseContext= useContext(ExpenseContext);
    return <ExpensesOutput expenses={expenseContext.expenses} expensePeriod="All Time" fallBackText="No expenses found." />
}