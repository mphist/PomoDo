import { render, screen } from '@testing-library/react'
import SideBar from './SideBar'

test('renders the New Task button', () => {
  render(<SideBar />)
  expect(screen.getByText('New Task')).toBeInTheDocument()
})
