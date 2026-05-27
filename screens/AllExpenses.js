import ExpensesOutput from "../components/ExpensesOutput";
import { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

export default function AllExpeneses() {
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

    if(isLoading){
        return <LoadingOverlay />
    }

    return <ExpensesOutput expenses={expenseContext.expenses} expensePeriod="All Time" fallBackText="No expenses found." />
}