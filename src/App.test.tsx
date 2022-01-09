import { render, screen } from '@testing-library/react'
import App from './App'

test('renders NavBar with the PomoDo logo', () => {
  render(<App />)
  const logo = screen.getByText('PomoDo')
  expect(logo).toBeInTheDocument()
})
test('erenders NavBar with the PomoDo logo', () => {
  render(<App />)
  const logo = screen.getByText('PomoDo')
  expect(logo).toBeInTheDocument()
})

test('renders the Welcome message in Body', () => {
  render(<App />)
  const welcome = screen.getByText('Welcome to PomoDo!')
  expect(welcome).toBeInTheDocument()
})
