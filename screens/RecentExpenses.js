import ExpensesOutput from "../components/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

export default function RecentExpenses() {

    const expenseContext= useContext(ExpenseContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function getExpenses(){
            const expenses= await fetchExpenses() ;
            expenseContext.setExpense(expenses);
            setIsLoading(false);
        }
        getExpenses();
    },[])

    const recentExpenses= expenseContext.expenses.filter((expense)=>{
        const today= new Date();
        const date7DaysAgo= new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    });

    if(isLoading){
        return <LoadingOverlay />
    }

    return <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 Days" fallBackText="No recent expenses found." />
}