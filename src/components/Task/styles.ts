import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#262626',
        borderColor: '#333333',
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginTop: 8
    },
    name: {
        fontSize: 16,
        color: '#FFF'
    },
    nameChecked: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    trash: {
        width: 32,
        height: 32,
        resizeMode: 'contain'
    }
})