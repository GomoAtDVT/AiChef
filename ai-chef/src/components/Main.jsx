import React from "react";
import IngredientsList from "./IngredientsList";
import AiRecipe from "./AiRecipe";
import { getRecipeFromMistral } from "../services/ai"
function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  async function handleRecipe() {
    
    const response = await getRecipeFromMistral(ingredients);
    setRecipe(response);
  }
  

  const ingredientElement = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleEvent(event) {
    const newIngredient = event.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  
  return (
    <>
      <main className="flex  ">
        <section className="flex flex-col items-start p-15 ">
          <form
          className="flex  gap-3 pb-10  items-center   "
          action={handleEvent}
        >
          <input
            className="p-2 border-1 rounded"
            placeholder="e.g avocado"
            type="text"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button className="p-2 border-1 bg-black text-white rounded  " >
            + Add Ingredient
          </button>
        </form>
        
          {ingredientElement.length ? 
          <IngredientsList
            ingredientElement={ingredientElement}
            ingredients={ingredients}
            handleRecipe={handleRecipe}
          />
          : null}
        </section>
        
          <section>
        {recipe ? <AiRecipe recipe={recipe}/> : null}
        </section>
      </main>
    </>
  );
}

export default Main;
