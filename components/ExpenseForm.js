import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from '../components/UI/Button';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {

    const [inputs, setInputs] = useState({
        amount: { value: defaultValues ? defaultValues.amount.toString() : '', isValid: true },
        date: { value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '', isValid: true },
        description: { value: defaultValues ? defaultValues.description : '', isValid: true }
    });

    function inputChangeHandler(inputIndetifier, enteredValue) {
        setInputs(prevInputs => ({
            ...prevInputs,
            [inputIndetifier]: { value: enteredValue, isValid: true }
        }));
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        }

        const amountIsValid = !isNaN(inputs.amount.value) && inputs.amount.value.trim().length > 0;
        const dateIsValid = inputs.date.value.trim().length > 0 && new Date(inputs.date.value).toString() !== 'Invalid Date';
        const descriptionIsValid = inputs.description.value.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            //Alert.alert('Invalid input', 'Please check your input values');
            return setInputs(prevInputs => ({
                amount: { value: prevInputs.amount.value, isValid: amountIsValid },
                date: { value: prevInputs.date.value, isValid: dateIsValid },
                description: { value: prevInputs.description.value, isValid: descriptionIsValid },
            }))
        }

        onSubmit(expenseData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={[styles.inputContainer]}>
                <Input
                    label="Amount"
                    inValid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }}
                    style={styles.rowInput} />
                <Input 
                    label="Date"
                    inValid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD', maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }}
                    style={styles.rowInput} />
            </View>
            <Input
                label="Description"
                inValid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true, autoCorrect: false,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value
                }} />

            {formIsInvalid && (
                <Text style={styles.errorText}>Please check your input values</Text>
            )}
            <View style={styles.buttons}>
                <Button style={styles.button} onPress={onCancel} mode='flat'>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    form: {
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 24,
        color: 'white',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 8,
    }
});