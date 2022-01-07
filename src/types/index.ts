export type Task = {
  name: string
  subtask: {
    [id: string]: string
  } | null
  timer: {
    mode: string
    time: number
  }
}
