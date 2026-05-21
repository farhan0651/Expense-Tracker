import { Pressable, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({icon, size, color, onPress}) {
return(
    <Pressable onPress={onPress} style={({pressed})=> pressed && {opacity: 0.7}}>
        <View>
        <Ionicons name={icon} size={size} color={color} />
        </View>
    </Pressable>
)
}

const styles = StyleSheet.create({
    iconButton: {
        opacity: 1,
    },
    pressed: {
        opacity: 0.7,
    }
});