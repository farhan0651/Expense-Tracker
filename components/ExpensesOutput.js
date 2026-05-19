import { View, Text, FlatList, StyleSheet } from "react-native";

const Dummy_expenses=[
        {id:'e1', description:'A pair of shoes', amount:59.99, date: new Date('2022-12-19')},
        {id:'e2', description:'A pair of trousers', amount:89.29, date: new Date('2022-12-18')},
        {id:'e3', description:'A pair of shirts', amount:29.99, date: new Date('2022-12-17')},
        {id:'e4', description:'A pair of socks', amount:9.99, date: new Date('2022-12-16')}
    ]

    function renderExpenseItem(itemData){
        return <Text>{itemData.item.description}: {itemData.item.amount}</Text>
    }

function ExpensesOutput({expenses, expensePeriod}){
    const expenseSum= Dummy_expenses.reduce((Sum, expense)=> { return Sum+expense.amount},0)
    return (
    <>
    <View style={styles.rootContainer}>
    <View style={styles.Summarycontainer}>
    <Text style={styles.period}>{expensePeriod}: </Text>
    <Text style={styles.sum}>{expenseSum.toFixed(2)}</Text>
    </View>
    <FlatList data={Dummy_expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>item.id} />
    </View>
    </>
    );
}

export default ExpensesOutput;


const styles=StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
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
    }
})