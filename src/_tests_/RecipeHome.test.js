import { render, screen } from  '@testing-library/react'
import RecipeHome from '../pages/RecipeHome'
import { BrowserRouter } from 'react-router-dom'

    describe('<RecipeHome />', () => {
      it('renders without crashing', () => {
        render(
          <BrowserRouter>
          <RecipeHome />
          </BrowserRouter>
        )

        const text = screen.getByText(/Checkout some ideas/i)
        expect(text).toBeInTheDocument()
        })
  })