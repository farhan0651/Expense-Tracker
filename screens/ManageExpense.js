import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expenses-context'; 

export default function ManageExpense({route, navigation}) {
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;
    const expenseContext= useContext(ExpenseContext);

    useLayoutEffect(() => {
         navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
    
    function deleteExpenseHandler(){
        expenseContext.deleteExpense(expenseId);
        navigation.goBack();
    }

    function cancelHandler(){
    navigation.goBack();
    console.log('Cancel');
}   

 function confirmHandler(){
    if(isEditing){
        expenseContext.updateExpense(expenseId, {amount: 100, date: new Date('2026-01-01'), description: 'Test Update'})
    } else {
        expenseContext.addExpense({amount: 100, date: new Date('2026-01-01'), description: 'Test'})
    }
    navigation.goBack();
}

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} onPress={cancelHandler} mode='flat'>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                   {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>
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
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    },
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: '#cccccc',
        alignItems: 'center',
    }
})