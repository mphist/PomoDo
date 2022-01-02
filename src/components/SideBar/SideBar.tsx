import TaskButton from '../TaskButton/TaskButton'

export type SideBarProps = {}

function SideBar({}: SideBarProps) {
  return (
    <div className='mt-10'>
      <ul>
        <TaskButton name='New Task' />
        <TaskButton name='Task 1' />
      </ul>
    </div>
  )
}

export default SideBar
