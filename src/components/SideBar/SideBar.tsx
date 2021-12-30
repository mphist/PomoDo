export type SideBarProps = {}

function SideBar({}: SideBarProps) {
  return (
    <div className='mt-10'>
      <ul>
        {/* <li className='border rounded-full border-solid w-12 h-12 cursor-pointer'></li> */}
        <li className='mt-2 w-20 bg-primary text-center text-tomato text-[14px] font-medium p-1 rounded-md cursor-pointer hover:font-extrabold'>
          New Task
        </li>

        <li className='mt-2 w-20 bg-primary text-center text-tomato text-[14px] font-medium p-1 rounded-md cursor-pointer hover:font-extrabold'>
          Task 1..
        </li>

        <li className='mt-2 w-20 bg-primary text-center text-tomato text-[14px] font-medium p-1 rounded-md cursor-pointer hover:font-extrabold'>
          Task 2..
        </li>
      </ul>
    </div>
  )
}

export default SideBar
