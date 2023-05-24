import { render, screen } from  '@testing-library/react'
import NotFound from '../pages/NotFound'

    describe('<NotFound />', () => {
      it('renders without crashing', () => {
        render(
          <NotFound/>
        )
        const text = screen.getByText(/ERROR 404/i)
        expect(text).toBeInTheDocument()
      })

      it("render a image with a src ", () => {
        render(
            <NotFound />
        )
        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src")
    })
})