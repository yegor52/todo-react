import { TasksProvider } from '../../context/TaskContext'
import Todo from '../../widgets/Todo'

const TasksPage = () => {
    return (
        <TasksProvider>
            <Todo/>
        </TasksProvider>
    )
}

export default TasksPage