import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";

export default function RecentExpenses() {

    const expenseContext= useContext(ExpenseContext);

    const recentExpenses= expenseContext.expenses.filter((expense)=>{
        const today= new Date();
        const date7DaysAgo= new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    });


    return <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 Days" fallBackText="No recent expenses found." />
}