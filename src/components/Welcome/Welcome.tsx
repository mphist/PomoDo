export type WelcomeProps = {}

function Welcome({}: WelcomeProps) {
  return (
    <div className='mx-auto mt-56 text-center text-tomato font-bold'>
      <h1 className='text-3xl p-10 tracking-wide'>Welcome to PomoDo!</h1>
      <h3 className='text-xl'>Create a new task to get started.</h3>
    </div>
  )
}

export default Welcome
