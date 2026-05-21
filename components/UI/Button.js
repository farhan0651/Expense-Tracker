import { Pressable, View, Text, StyleSheet } from "react-native";

function Button({children, onPress, mode, style}){
return(
<View style={style}>
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <View style={[styles.button, mode==='flat' && styles.flat]}>
        <Text style={[styles.buttonText, mode==='flat' && styles.flatText]}>{children}</Text>
        </View>
    </Pressable>
</View>
);
}

export default Button;

const styles=StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#2d86e4',
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: '#2d86e4',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#1266c1',
        borderRadius: 4,
    }
})