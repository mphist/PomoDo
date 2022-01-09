import { render, screen } from '@testing-library/react'
import Logo from './Logo'

test('renders the PomoDo logo', () => {
  render(<Logo />)
  const logo = screen.getByText('PomoDo')
  expect(logo).toBeInTheDocument()
})
