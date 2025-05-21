import { View, TextInput, Image, TouchableOpacity } from "react-native"

import { styles } from './styles'

type Props = {
    onAdd: () => void,
    taskName: string,
    setTaskName: (text: string) => void
}

export default function Input({ taskName, setTaskName, onAdd }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#6B6B6B'
                onChangeText={text => setTaskName(text)}
                value={taskName}
            />

            <TouchableOpacity onPress={onAdd}>
                <Image source={require('../../../assets/add.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}