import { createContext, useReducer } from "react";

const Dummy_expenses=[
        {id:'e1', description:'A pair of shoes', amount:59.99, date: new Date('2026-04-19')},
        {id:'e2', description:'A pair of trousers', amount:89.29, date: new Date('2026-04-18')},
        {id:'e3', description:'A pair of shirts', amount:29.99, date: new Date('2026-04-17')},
        {id:'e4', description:'A pair of socks', amount:9.99, date: new Date('2026-04-16')},
        {id:'e5', description:'A pair of gloves', amount:19.99, date: new Date('2026-05-15')},
        {id:'e6', description:'A pair of boots', amount:129.99, date: new Date('2026-05-14')},
        {id:'e7', description:'A pair of trimmers', amount:89.29, date: new Date('2026-05-18')},
        {id:'e8', description:'A pair of hat', amount:29.99, date: new Date('2026-05-17')},
        {id:'e9', description:'A pair of masks', amount:9.99, date: new Date('2026-05-16')}
    ]

export const ExpenseContext=createContext({
    expenses: [],
    addExpense: ({description, amount, date})=>{},
    deleteExpense: (id)=>{},
    updateExpense: (id, {description, amount, date})=>{}
})

function expensesReducer(state, action){ 
        switch (action.type) {
            case 'ADD':
                const id= new Date().toString() + Math.random().toString();
                return [{...action.payload, id: id}, ...state];
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
    const [expenses, dispatch]=useReducer(expensesReducer,Dummy_expenses);

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
            }
        }}>
            {children}
        </ExpenseContext.Provider>
    ); 
}

export default ExpenseContextProvider;