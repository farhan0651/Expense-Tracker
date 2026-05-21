import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

    function renderExpenseItem(itemData){
        return <ExpenseItem {...itemData.item} />
    }

function ExpensesOutput({expenses, expensePeriod, fallBackText}) {
    const expenseSum= expenses.reduce((Sum, expense)=> { return Sum+expense.amount},0)
    let content= <Text style={styles.infoText}>{fallBackText}</Text>
    if(expenses.length>0){
        content= <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>item.id} />
    }
    return (
    <>
    <View style={styles.rootContainer}>
    <View style={styles.Summarycontainer}>
    <Text style={styles.period}>{expensePeriod}: </Text>
    <Text style={styles.sum}>{expenseSum.toFixed(2)}</Text>
    </View>
    {content}
    </View>
    </>
    );
}

export default ExpensesOutput;


const styles=StyleSheet.create({
    rootContainer:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: '#29bdfd',
    },
    Summarycontainer:{
        padding: 8,
        backgroundColor: '#8c8af9',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period:{
        fontSize: 12,
        color: '#ffffff',
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    infoText:{
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 32,
        fontSize: 16,
    }
})