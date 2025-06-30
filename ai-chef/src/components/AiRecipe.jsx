import ReactMarkdown from 'react-markdown'
function AiRecipe(props) {
  return (
    <>
      <section className='flex flex-col overflow-y-scroll lg:h-150 lg:w-200 sm:h-150 sm:w-full lg:mx-5 sm:mx-0 sm:mt-5 p-5 bg-gray-900 rounded-lg shadow-md lg:mb-0 sm:mb-15'>
        <h1 className='font-bold text-3xl pb-5'>Your Recipe</h1>
        {props.loading === true ? <div className="skeleton h-full w-full"></div> :
        <ReactMarkdown >
            {props.recipe}
        </ReactMarkdown>}
      </section>
    </>
  );
}
export default AiRecipe;
