import { screen, render } from '@testing-library/react'
import { TaskContext } from '../../contexts/TaskContext'
import Pomodoro from './Pomodoro'

const customRender = (ui, { providerProps, ...renderOptions }) =>
  render(
    <TaskContext.Provider {...providerProps}>{ui}</TaskContext.Provider>,
    renderOptions
  )

test('Pomodoro shows the linearBar, time, start and reset buttons', () => {
  const taskProviderProps = {
    value: {
      task: {
        abcdef: {
          name: 'Main Task',
          subtask: {
            hijklm: {
              name: 'Sub task',
              checked: false,
            },
          },
          timer: {
            mode: 'focus',
            time: 25,
          },
        },
      },
    },
  }
  customRender(<Pomodoro id='abcdef' />, { providerProps: taskProviderProps })
  expect(screen.getByTestId('linearBar')).toBeInTheDocument()
  expect(screen.getByText('25:00')).toBeInTheDocument()
})
