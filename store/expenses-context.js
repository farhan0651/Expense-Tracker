import { createContext, useReducer } from "react";

export const ExpenseContext=createContext({
    expenses: [],
    addExpense: ({description, amount, date})=>{},
    setExpense: (expenses)=>{},
    deleteExpense: (id)=>{},
    updateExpense: (id, {description, amount, date})=>{}
})

function expensesReducer(state, action){ 
        switch (action.type) {
            case 'ADD':
                return [action.payload , ...state];
            case 'SET':
                const inverted= action.payload.reverse();
                return inverted;
            case 'DELETE':
                return state.filter((expense) => expense.id !== action.payload);
            case 'UPDATE':
                const updatableExpenseIndex= state.findIndex((expense)=> expense.id === action.payload.id);
                const updatableExpense= state[updatableExpenseIndex];
                const updatedItem={...updatableExpense, ...action.payload.updatedExpense}
                const updatedExpenses=[...state];
                updatedExpenses[updatableExpenseIndex]= updatedItem;
                return updatedExpenses;
            default:
                return state;
        }
}


function ExpenseContextProvider({children}){
    const [expenses, dispatch]=useReducer(expensesReducer,[]);

    return (
        <ExpenseContext.Provider value={{
            expenses,
            addExpense: (expenseData) => {
                dispatch({ type: 'ADD', payload: expenseData });
            },
            deleteExpense: (id) => {
                dispatch({ type: 'DELETE', payload: id });
            },
            updateExpense: (id, expenseData) => {
                dispatch({ type: 'UPDATE', payload: { id, updatedExpense: expenseData } });
            },
            setExpense: (expenses) => {
                dispatch({ type: 'SET', payload: expenses });
            }
        }}>
            {children}
        </ExpenseContext.Provider>
    ); 
}

export default ExpenseContextProvider;