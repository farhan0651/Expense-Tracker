import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#2d86e4" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4b65',
    },
});