import React from "react";
import IngredientsList from "./IngredientsList";
import AiRecipe from "./AiRecipe";
import { getRecipeFromMistral } from "../services/ai"
function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState();
  
  async function handleRecipe() {
    setLoading(true);
    const response = await getRecipeFromMistral(ingredients);
    setRecipe(response);
    setLoading(false);
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
      <main className="flex lg:flex-row sm:flex-col lg:justify-between  bg-gray-800 min-h-screen ">
        <section className="flex flex-col lg:items-start sm:items-center lg:w-full lg:h-150 md:w-full sm:w-full lg:mx-5 sm:mx-5 md:mx-0 sm:mt-5 lg:p-10  bg-gray-600 rounded-lg shadow-md">
          <form
          className="flex lg:p-0 md:p-10 gap-3 "
          action={handleEvent}
        >
          <input
            className="p-2 rounded shadow-md bg-gray-500"
            placeholder="e.g avocado"
            type="text"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button className="p-2 cursor-pointer bg-black text-white rounded  shadow-md" >
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
            {

        recipe ? <AiRecipe loading={loading} setLoading={setLoading} recipe={recipe}/>
        : <AiRecipe loading={loading} setLoading={setLoading} recipe={recipe} />
        
        }
        </section>
      </main>
    </>
  );
}

export default Main;
