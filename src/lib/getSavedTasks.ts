import { TaskContextType } from '../contexts/TaskContext'

export default function getSavedTasks() {
  const local = localStorage.getItem('task')
  const savedTasks: TaskContextType | null = local && JSON.parse(local)
  return savedTasks
}
