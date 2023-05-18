
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecipeHome from './pages/RecipeHome'
import RecipeNew from './pages/RecipeNew';
import RecipeEdit from './pages/RecipeEdit'
import RecipeShow from './pages/RecipeShow'
import RecipeIndex from './pages/RecipeIndex'
import ProtectedMyRecipes from './pages/ProtectedMyRecipes'
import LogIn from './componets/LogIn'
import SignUp from './componets/SignUp'
import AboutUs from './pages/AboutUs'
import Navigation from './componets/Navigation'
import NotFound from './pages/NotFound'
import Header from './componets/Header'
import Footer from './componets/Footer'
import mockUsers from './mockUsers';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap'

const App = ()=> {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    readRecipe()
  }, [])

  const updateRecipe = (recipe, id) => {
    console.log(recipe);
    console.log(id);
	}

  const readRecipe = () => {
    fetch('http://localhost:3000/recipes')
      .then((response) => response.json())
      .then((payload) => {
        setRecipes(payload)
        setLoading(false)
      })
      .catch((error) => console.log("Recipe read errors ", error))
  }

  const createRecipe = (recipe) => {
    fetch("http://localhost:3000/recipes", {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("Recipe create errors:", errors))
  }

  if (loading || recipes.length === 0) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    )
  }
  return(
    <>
    <Header />
    <Routes>
        <Route path='/' element={<RecipeHome />} />
        <Route path='/recipeindex' element={<RecipeIndex recipes={recipes} />} />
        <Route path='/recipeshow/:id' element={<RecipeShow recipes={recipes}/>} />
        <Route path='/recipenew' element={<RecipeNew createRecipe={createRecipe} currentUser={currentUser}/>}/>
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/recipeedit/:id' element={<RecipeEdit recipes={recipes} currentUser={currentUser} updateRecipe={updateRecipe}/>} />
        <Route path='/protectedmyrecipes' element={<ProtectedMyRecipes recipes={recipes} currentUser={currentUser}/>} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/header' element={<Header />} />
        
    </Routes>
    <Footer />
    </>
  )
}
export default App;
