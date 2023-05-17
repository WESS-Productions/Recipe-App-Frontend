
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecipeHome from './pages/RecipeHome'
// import RecipeEdit from './pages.RecipeEdit'
import RecipeShow from './pages/RecipeShow'
import RecipeIndex from './pages/RecipeIndex'
import ProtectedMyRecipes from './pages/ProtectedMyRecipes'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import AboutUs from './pages/AboutUs'
import Navigation from './pages/Navigation'
import NotFound from './pages/NotFound'
import Header from './componets/Header'
import Footer from './componets/Footer'

const App = ()=> {
  return(
    <>
    <Header />
    <Routes>
        <Route path='/' element={<RecipeHome />} />
        <Route path='/recipeindex' element={<RecipeIndex />} />
        <Route path='/recipeshow' element={<RecipeShow />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        {/* <Route path='/recipeedit' element={<RecipeEdit />} /> */}
        <Route path='/protectedmyrecipes' element={<ProtectedMyRecipes />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/header' element={<Header />} />
        
    </Routes>
    <Footer />
    </>
  )
}
export default App;
