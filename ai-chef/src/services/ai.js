
import { GoogleGenAI } from "@google/genai";
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

export async function getRecipeFromMistral(ingredientsArray) {
  console.log("Ingredients received:", ingredientsArray);
  const ingredientsString = ingredientsArray.join(", ");
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: ` I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
      config: {
        systemInstruction: `${SYSTEM_PROMPT}.`,
      },
    });
    console.log("Response from AI:", response);    
    return response.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return "Sorry, I couldn't generate a recipe at this time. Please try again later.";
  }
}
