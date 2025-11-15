import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
test('render brand', ()=>{
  render(<MemoryRouter><App/></MemoryRouter>)
  expect(screen.getByText(/Meus Alunos/i)).toBeInTheDocument()
})
