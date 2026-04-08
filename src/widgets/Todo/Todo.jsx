import { useContext } from 'react'
import { TasksContext } from '../../context/TaskContext'
import styles from './Todo.module.css'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import TodoList from '../../components/TodoList/TodoList'
import TodoInfo from '../../components/TodoInfo/TodoInfo'
import SearchTaskForm from '../../components/SearchTaskForm/SearchTaskForm'
import Button from '../../components/Button/Button'

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Show first incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  )
}

export default Todo