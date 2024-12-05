import React from 'react';
import './main.css';
import Recipe from './recipe';
import {useState} from 'react'
import {getRecipeFromMistral} from './ai'

export default function Main(){

  const [ingredients, setIngredients] = useState({
     items : ""
  });

  const [ingredientsList, setIngredientsList] = useState([]);

  function changeVal(event){
    const {name, value} = event.target;

    setIngredients((prevIngredients)=>({
      ...prevIngredients,
      [name]:value
    }));
    
  }


  function saveVal(event){
    event.preventDefault()
    setIngredientsList((prevList)=> 
      [...prevList, ingredients]
    )
    
    console.log(ingredientsList);
    
  }

  const [recipe, setrecipe] = useState("")
  
async function getRecipeAi(){
  const recipeMarkdown = await getRecipeFromMistral(ingredientsList)
  setrecipe(recipeMarkdown)
  
  
}
  
  return(
  <div>
  <h1>Chef Claude</h1>
      <form onSubmit = {saveVal} className = "form">
    <input type = "text" placeholder = "Add Items"
      name = "items"
      value = {ingredients.items}
      onChange = {changeVal}
      
      />
  <button>Add Ingredients</button>
      </form>

   {ingredientsList.length>0? <section>
      <h2>Ingredients on Hands :</h2>
            <ul>{ingredientsList.map((ingredient, index) => (
            <li key={index}>{ingredient.items}</li>
          ))}
        </ul>

     {ingredientsList.length>3 && <div className = "getRecipe">
      <div className = "recipe ">
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients</p>

        <button onClick={getRecipeAi}>Get a recipe</button>
      
      </div>
      </div>}
      </section> : null}


    {recipe && <Recipe recipe = {recipe} />}
    
  </div>
    )
}

