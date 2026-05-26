import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ label, style, inValid, textInputConfig }) {
    const inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    if (inValid) {
        inputStyles.push(styles.invalidInput);
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, inValid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: '#130606',
        marginVertical: 4,
    },
    input: {
        backgroundColor: '#e4e4e4',
        padding: 6,
        borderRadius: 4,
        fontSize: 18,
        color: '#000000',
    },
    inputMultiline: {
        marginVertical: 8,
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: 'red',
    },
    invalidInput: {
        backgroundColor: '#fcdcdc',
    }
})