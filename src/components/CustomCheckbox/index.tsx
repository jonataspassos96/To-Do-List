import { TouchableOpacity, View, Image } from 'react-native'
import { styles } from './styles'

type Props = {
    isChecked: boolean,
    handleToggleCheck: () => void
}

export default function CustomCheckbox({ isChecked, handleToggleCheck }: Props) {
    return (
        <TouchableOpacity onPress={handleToggleCheck}>
            <View style={styles.check}>
                {
                    isChecked
                        ? <Image source={require('../../../assets/check-true.png')} style={styles.check} />
                        : <Image source={require('../../../assets/check-false.png')} style={styles.check} />
                }
            </View>
        </TouchableOpacity>
    )
}