import React from 'react';
import { useState } from 'react';
export default function Array(){
  const [favThings , setfavThings ] = useState([]);

  const allFavThings = ["hello", "hi", "hey"]

  const thingElements = favThings.map(thing => <p key = {thing}>{thing}</p>)

  function addFavThings(){
    setfavThings(prevfavThings =>[
      ...prevfavThings,
allFavThings[prevfavThings.length]])
  }



  return (
    <div>
    <button onClick = {addFavThings}>Add item</button>

      {thingElements}
    </div>
  )
  
}