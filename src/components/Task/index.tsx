import { View, TouchableOpacity, Text, Image } from 'react-native'
import CustomCheckbox from '../CustomCheckbox'
import { styles } from './styles'
import { useState } from 'react'

type Props = {
    name: string,
    onRemove: (a: string, b: boolean) => void,
    setCompleted: (a: (b: number) => number) => void
}

export default function Task({ name, onRemove, setCompleted }: Props) {
    const [isChecked, setIsChecked] = useState(false)

    function handleToggleCheck() {
        setIsChecked(!isChecked)
        setCompleted(prevState => prevState += isChecked ? -1 : 1)
    }

    return (
        <View style={styles.container}>
            <CustomCheckbox isChecked={isChecked} handleToggleCheck={handleToggleCheck} />
            <Text style={[styles.name, isChecked && styles.nameChecked]}>
                {name}
            </Text>

            <TouchableOpacity style={styles.trash} onPress={() => onRemove(name, isChecked)}>
                <Image source={require('../../../assets/trash.png')} style={styles.trash} />
            </TouchableOpacity>
        </View>
    )
}