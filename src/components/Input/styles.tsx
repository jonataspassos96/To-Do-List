import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 52,
        height: 52,
        resizeMode: 'contain'
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
})