import React from 'react';
import {useState} from 'react' 
export default function Button(){
  const [count , setCount ] = useState(0);
const [save,setSave] = useState([]);
  function add(){
    setCount(count + 1);
  }
  
  function sub(){
    if(count > 0){
      setCount(count - 1);
    }else{
      setCount(0);
    }
  }

  function reset(){
    setCount(0);
  }

  function saveVal(){
   setSave(prevCount => [...prevCount,count + " , "])

  }
  return (
    <div>
      <p>the count is {count}</p>
    <button onClick={add}>+</button>

    <button onClick={sub}>-</button>
   <button onClick={reset}>Reset</button>

      <button onClick={saveVal}>Save</button>
      <div>
        save count : {save}
      </div>
    </div>
    
  )
}