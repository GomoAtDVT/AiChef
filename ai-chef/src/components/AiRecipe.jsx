import ReactMarkdown from 'react-markdown'
function AiRecipe(props) {
  return (
    <>
      <section className='flex flex-col justify-center  mx-5 p-5 bg-gray-100 rounded-lg shadow-md mt-5'>
        <h1 className='font-bold text-3xl pb-5'>Your Recipe</h1>
        <ReactMarkdown >
            {props.recipe}
        </ReactMarkdown>
      </section>
    </>
  );
}
export default AiRecipe;
