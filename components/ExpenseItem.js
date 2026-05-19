import { Pressable,View,Text, StyleSheet } from "react-native";

function ExpenseItem({description, amount, date}) {
    return (
        <Pressable>
        <View style={styles.expenseItem}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.textbase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}</Text>
        </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles=StyleSheet.create({
    expenseItem:{
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#3c7ce3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    textbase:{
        color: 'white',
    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer:{
        paddingHorizontal: 12, 
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    amount:{
        color: '#3c7ce3',
        fontWeight: 'bold',
    }
})