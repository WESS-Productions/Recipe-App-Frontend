import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeNew = ({createRecipe, currentUser}) => {
  
  const navigate = useNavigate()

  const [newRecipe, setNewRecipe] = useState({
    user_id: currentUser.id,
    title: "",
    ingredients: "",
    instructions: "",
    vegetarian: "",
    prep_time: "",
    cook_time: "",
    image: ""
    
  })

  const handleChange = (e) => {
    setNewRecipe({...newRecipe, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    createRecipe(newRecipe)
    navigate ("/protectedmyrecipes")
  }
    
  return(
    <>  
    <div className="sign-up-container">  
    <div className="sign-up"> 
      <Form 
      className="form">

        <FormGroup>
          <Label for="recipe-title">Title</Label>
          <Input
          id="recipe-title"
          name="title"
          placeholder="Enter Title"
          type="text"
          onChange={handleChange}
          value={newRecipe.title}
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipe-ingredients">Ingredients</Label>
          <Input
          id="recipe-ingredients"
          name="ingredients"
          placeholder="Enter Ingredients"
          type="text"
          onChange={handleChange}
          value={newRecipe.ingredients}
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipe-instructions">Instructions</Label>
          <Input
          id="recipe-instructions"
          name="instructions"
          placeholder="Enter Instructions"
          type="text"
          onChange={handleChange}
          value={newRecipe.instructions}
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipe-vegetarian">Vegetarian</Label>
          <Input
          id="recipe-vegetarian"
          name="vegetarian"
          placeholder="Enter if recipe is vegetarian"
          type="text"
          onChange={handleChange}
          value={newRecipe.vegetarian}
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipe-prep-time">Prep Time</Label>
          <Input
          id="recipe-prep-time"
          name="prep_time"
          placeholder="Enter Prep Time"
          type="text"
          onChange={handleChange}
          value={newRecipe.prep_time}
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipe-cook-time">Cook Time</Label>
          <Input
          id="recipe-cook-time"
          name="cook_time"
          placeholder="Enter Cook Time"
          type="text"
          onChange={handleChange}
          value={newRecipe.cook_time}
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipe-image">Image</Label>
          <Input
          id="recipe-image"
          name="image"
          placeholder="Enter image source"
          type="text"
          onChange={handleChange}
          value={newRecipe.image}
          />
        </FormGroup>
        
      </Form>
      <Button className="submit" onClick={handleClick}>Submit</Button>
      </div> 
      </div>  
    </>
    
  )
}

export default RecipeNew