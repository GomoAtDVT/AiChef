function IngredientsList(props) {
  return (
    <>
      <section className="flex flex-col items-start justify-between h-100 w-120">
        <section>
          <h1 className="font-bold text-3xl">Ingredients on hand</h1>
          <ul className="flex flex-col items-start ">
            {props.ingredientElement}
          </ul>
        </section>
        {props.ingredientElement.length > 3 ? (
          <div className="flex gap-5 items-center  p-5 bg-gray-100 rounded-lg shadow-md ">
            <div className="flex flex-col items-start justify-center p-5 bg-gray-300 rounded-lg shadow-md">
              <h3 className="italic">Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button
              className="w-45 py-2 bg-yellow-600 shadow-md active:shadow-none rounded cursor-pointer"
              onClick={props.handleRecipe}
            >
              Get a recipe
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
}

export default IngredientsList;
