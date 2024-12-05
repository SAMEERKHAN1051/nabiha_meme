import { HfInference } from '@huggingface/inference'
  ;

const SYSTEM_PROMPT = "You are a chef. You are a helpful assistant that can cook a dish from a list of ingredients. You can also generate a recipe from a list of ingredients. "

const hf = new HfInference('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')

export async function getRecipeFromMistral(ingredientsArr){
  const ingredientsString = ingredientsArr.join(', ')
  try {
    const response = await hf.chatCompletion({
      model : "mistralai/Mistral-Nemo-Instruct-2407",
      messages :[
        {role : "system", content : SYSTEM_PROMPT},
        {role : "user", content : `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`}
        
      ],
      max_tokens : 1024,
    })
    return response.choices[0]. message.content
  } catch (err){
    console.error(err.message)
  }
  
}