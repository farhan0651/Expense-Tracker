import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { useContext, useState } from 'react';
import { ExpenseContext } from '../store/expenses-context'; 
import ExpenseForm from '../components/ExpenseForm';
import { storeExpense } from '../util/http';
import { updateExpense, deleteExpense } from '../util/http';

export default function ManageExpense({route, navigation}) {
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;
    const expenseContext= useContext(ExpenseContext);
    const [isLoading, setIsLoading] = useState(false);

    const selectedExpense = expenseContext.expenses.find((expense) => expense.id === expenseId);

    useLayoutEffect(() => {
         navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
    
    async function deleteExpenseHandler(){
        setIsLoading(true);
        await deleteExpense(expenseId);
        setIsLoading(false);
        expenseContext.deleteExpense(expenseId);
        navigation.goBack();
    }

    function cancelHandler(){
    navigation.goBack();
    console.log('Cancel');
}   

 async function confirmHandler(expenseData){
    setIsLoading(true);
    if(isEditing){
        expenseContext.updateExpense(expenseId, expenseData)
        await updateExpense(expenseId, expenseData);
    } else {
        const id = await storeExpense(expenseData);
        expenseContext.addExpense({ ...expenseData, id });
    }
    setIsLoading(false);
    navigation.goBack();
}

    return (
        <View style={styles.container}>
            <ExpenseForm 
            onCancel={cancelHandler} 
            onSubmit={confirmHandler} 
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            defaultValues={selectedExpense}
            />
          {isEditing && (
            <View style={styles.deleteContainer}>
                <IconButton icon="trash" size={36} color='#cc0808' onPress={deleteExpenseHandler} />
            </View>
          )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        padding: 24,
        backgroundColor: '#0e4b65',
    },
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: '#cccccc',
        alignItems: 'center',
    }
})