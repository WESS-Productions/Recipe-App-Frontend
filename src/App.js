
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
import mockUsers from './mockUsers';
import mockRecipes from './mockRecipes';
import { useState } from 'react';

const App = ()=> {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recipes, setRecipes] = useState(mockRecipes)


  return(
    <>
    <Header />
    <Routes>
        <Route path='/' element={<RecipeHome />} />
        <Route path='/recipeindex' element={<RecipeIndex recipes={recipes}/>} />
        <Route path='/recipeshow' element={<RecipeShow recipes={recipes}/>} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        {/* <Route path='/recipeedit' element={<RecipeEdit />} /> */}
        <Route path='/protectedmyrecipes' element={<ProtectedMyRecipes recipes={recipes}/>} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/header' element={<Header />} />
        
    </Routes>
    <Footer />
    </>
  )
}
export default App;
