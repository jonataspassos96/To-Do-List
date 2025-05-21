import { View, Text, Image, FlatList, Alert, Pressable } from 'react-native'

import { styles } from './styles'

import Input from '../../components/Input'
import Task from '../../components/Task'

import { useState } from 'react'

export default function Home() {

    const [created, setCreated] = useState(0)
    const [completed, setCompleted] = useState<number>(0)
    const [taskName, setTaskName] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    function handleTaskAdd() {
        if (tasks.includes(taskName))
            return Alert.alert('Tarefa existente', 'Já existe essa tarefa na lista.')

        setTasks(prevState => [...prevState, taskName])
        setTaskName('')
        setCreated(prevState => prevState += 1)
    }

    function handleTaskRemove(name: string, isChecked: boolean) {
        setTasks(prevState => prevState.filter(task => task != name))
        setCreated(prevState => prevState -= 1)
        if (isChecked)
            if (completed > 0)
                setCompleted(prevState => prevState -= 1)
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Logo.png')} style={styles.image} />

            <Input taskName={taskName} setTaskName={setTaskName} onAdd={handleTaskAdd} />

            <View style={styles.tasks}>
                <View style={styles.taskStatus}>
                    <View style={styles.containerOfCreated}>
                        <Text style={styles.createdText}>
                            Criadas
                        </Text>
                        <Text style={styles.counterOfCreatedTasks}>
                            {created}
                        </Text>
                    </View>

                    <View style={styles.containerOfCompleted}>
                        <Text style={styles.completedText}>
                            Concluídas
                        </Text>
                        <Text style={styles.counterOfCompletedTasks}>
                            {completed}
                        </Text>
                    </View>
                </View>

                <FlatList
                    style={styles.list}
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task name={item} onRemove={handleTaskRemove} setCompleted={setCompleted} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyState}>
                            <Image source={require('../../../assets/Clipboard.png')} style={styles.imageEmptyState} />
                            <Text style={styles.listEmptyState}>
                                Você ainda não tem tarefas cadastradas. Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}