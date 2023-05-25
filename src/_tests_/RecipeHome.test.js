import { render, screen } from  '@testing-library/react'
import RecipeHome from '../pages/RecipeHome'
import { BrowserRouter } from 'react-router-dom'

    describe('<RecipeHome />', () => {
      const login = jest.fn()
      const recipes = [
        {
          id: 1,
          image: "https://example.com/image1.jpg",
        },
        {
          id: 2,
          image: "https://example.com/image2.jpg",
        },
      ]
      const currentUser = {
        id: 1
      }
      it('renders the correct elements', () => {
  
        render(
          <BrowserRouter>
          <RecipeHome login={login} recipes={recipes} currentUser={currentUser} />
          </BrowserRouter>
        )

        const text = screen.getByText(/Welcome/i)
        expect(text).toBeInTheDocument()
        })
  })