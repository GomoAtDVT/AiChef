function IngredientsList(props) {
  return (
    <>
      <section className="flex flex-col  lg:h-100 lg:w-full sm:h-100 sm:w-full md:w-full sm:mt-5 gap-4">
        <section className="flex flex-col items-start lg:w-full p-5 bg-gray-500 rounded-lg shadow-md gap-3 h-full">
          <h1 className="font-bold text-3xl">Ingredients on hand</h1>
          <ul className="flex flex-col items-start w-full overflow-y-scroll ">
            {props.ingredientElement}
          </ul>
        </section>
        {props.ingredientElement.length > 3 ? (
          <div className="flex gap-5 items-center p-5 bg-gray-900 rounded-lg shadow-md ">
            <div className="flex flex-col items-start justify-center p-5 bg-gray-600 rounded-lg shadow-md">
              <h3 className="italic">Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button
              className="w-45 py-2 bg-green-700 shadow-md active:shadow-none rounded cursor-pointer"
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
