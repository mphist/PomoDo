export type SideBarProps = {}

function SideBar({}: SideBarProps) {
  return (
    <div className='mt-10'>
      <ul>
        <li className='mt-3 w-20 bg-tomato text-center text-white text-[14px] font-bold py-1 px-2 rounded-md cursor-pointer hover:brightness-95 overflow-hidden whitespace-nowrap text-ellipsis'>
          New Task
        </li>

        <li className='mt-3 w-20 bg-tomato text-center text-white text-[14px] font-bold py-1 px-2 rounded-md cursor-pointer hover:brightness-95 overflow-hidden whitespace-nowrap text-ellipsis'>
          Task 1
        </li>

        <li className='mt-3 w-20 bg-tomato text-center text-white text-[14px] font-bold py-1 px-2 rounded-md cursor-pointer hover:brightness-95 overflow-hidden whitespace-nowrap text-ellipsis'>
          Very long task
        </li>
      </ul>
    </div>
  )
}

export default SideBar
