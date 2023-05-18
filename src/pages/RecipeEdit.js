import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const RecipeEdit = ({ recipes, currentUser, updateRecipe }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  let currentRecipe = recipes?.find((recipe) => recipe.id === +id)

  const [editRecipe, setEditRecipe] = useState({
    user_id: currentUser.id,
    title: currentRecipe.title,
    ingredients: currentRecipe.ingredients,
    instructions: currentRecipe.instructions,
    vegetarian: currentRecipe.vegetarian,
    prep_time: currentRecipe.prep_time,
    cook_time: currentRecipe.cook_time,
    image: currentRecipe.image
    
  })
  const handleChange = (e) => {
    setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    updateRecipe(editRecipe, currentRecipe.id)
    navigate(`/recipeshow/${id}`)
  }
  return(
    <div>
      <Form 
      className="edit-recipe-form">
        <FormGroup>
          <Label for="recipe-title">Title</Label>
          <Input
          id="recipe-title"
          name="title"
          placeholder="Enter Title"
          type="text"
          onChange={handleChange}
          value={editRecipe.title}
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
          value={editRecipe.ingredients}
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
          value={editRecipe.instructions}
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
          value={editRecipe.vegetarian}
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
          value={editRecipe.prep_time}
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
          value={editRecipe.cook_time}
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
          value={editRecipe.image}
          />
        </FormGroup>

        <Button className="submit-button" onClick={handleSubmit}>Submit Updated Recipe</Button>
      </Form>
      <br/>
    </div>

  )
}

export default RecipeEdit