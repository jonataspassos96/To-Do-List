import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 24,
        paddingLeft: 24,
        backgroundColor: '#0D0D0D'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    tasks: {
        flex: 1,
        marginTop: 32
    },
    taskStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerOfCreated: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createdText: {
        color: '#4EA8DE',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8
    },
    counterOfCreatedTasks: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    containerOfCompleted: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    completedText: {
        color: '#8284FA',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8
    },
    counterOfCompletedTasks: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    emptyState: {
        marginTop: 20,
        alignItems: 'center'
    },
    list: {
        marginTop: 20
    },
    imageEmptyState: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 48
    },
    listEmptyState: {
        color: '#808080',
        textAlign: 'center',
        marginTop: 16
    }
})