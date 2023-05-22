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

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [recipes, setRecipes] = useState([])
  const url = "https://yum-web-application.onrender.com"

  useEffect(() => {
    readRecipe()
  }, [])

  const readRecipe = () => {
    fetch('https://yum-web-application.onrender.com/recipes')
      .then((response) => response.json())
      .then((payload) => {
        setRecipes(payload)
      })
      .catch((error) => console.log("Recipe read errors ", error))
  }

  const createRecipe = (recipe) => {
    fetch("https://yum-web-application.onrender.com/recipes", {
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

  const updateRecipe = (recipe, id) => {
    fetch(`https://yum-web-application.onrender.com/recipes/${id}`, {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("Recipe update errors:", errors))
  }

  const deleteRecipe = (id) => {
    fetch(`https://yum-web-application.onrender.com/recipes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("delete errors:", errors))
  }

  // authentication methods
  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Invalid username or password") // Throw an error for failed authentication
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Invalid username or password") // Throw an error for failed authentication
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        if(payload.id !== null){
          setCurrentUser(payload)
        }
      })
      .catch(error => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
      .then(payload => {
        localStorage.removeItem("token")  // remove the token
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
  }

  return (
    <>
      <Header current_user={currentUser} logout={logout}/>
      <Routes>
        <Route path='/' element={<RecipeHome login={login} recipes={recipes} currentUser={currentUser}/>} />
        <Route path='/recipeindex' element={<RecipeIndex recipes={recipes} />} />
        <Route path='/recipeshow/:id' element={<RecipeShow recipes={recipes} />} />
        <Route path='/recipenew' element={<RecipeNew createRecipe={createRecipe} currentUser={currentUser} />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/signup' element={<SignUp signup={signup}/>} />
        <Route path='/login' element={<LogIn login={login} deleteRecipe={deleteRecipe} />} />
        <Route path='/recipeedit/:id' element={<RecipeEdit recipes={recipes} currentUser={currentUser} updateRecipe={updateRecipe} />} />
        <Route path='/protectedmyrecipes' element={<ProtectedMyRecipes recipes={recipes} currentUser={currentUser} deleteRecipe={deleteRecipe} />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/navigation' element={<Navigation current_user={currentUser}/>} />
        <Route path='/header' element={<Header current_user={currentUser}/>} />

      </Routes>
      <Footer />
    </>
  )
}
export default App;

