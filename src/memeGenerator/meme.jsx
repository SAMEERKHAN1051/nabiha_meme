import React from 'react'
import './meme.css'
import { useState , useEffect} from 'react'


export default function Meme(){

  const [meme , setMemes] = useState({
    topText : "One does not simply",
    bottomText : "Walk into Mordor",
    imgUrl : ""
  })

  const [allMemes, setallMemes] = useState({});
    useEffect(() => {
        async function getMeme() {
            const res = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await res.json()
            setallMemes(data.data.memes)
        }
        getMeme()
    },[]);


  function getRandomImg(){
    const randNum = Math.floor(Math.random() * allMemes?.length);
    const url = allMemes[randNum].url
    setMemes(prevMemes => ({
      ...prevMemes,
      imgUrl : url
    }))
    
  }
  
  function handleChange(event){
    const {name , value} = event.target;
    setMemes(prevMemes => ({
      ...prevMemes,
      [name] :value
        
    }))
  }
  return (
    <div>
      <div className = "nav">
      <h2>Meme Generator</h2>
      </div>

      <div className="main">
      <div className="getMeme">
      <input type ="text"             placeholder="Enter joke"
        name = "topText"
        value = {meme.topText}
        onChange = {handleChange}
        
        
        />

      <input type ="text" placeholder="Enter joke"
        name = "bottomText"
        value = {meme.bottomText}
        onChange = {handleChange}
        
        />
      </div>
      <button 
        className = "getImg"
        onClick = {getRandomImg}>
        Generate</button>

      <div className="meme">
        <img src = {meme.imgUrl}/>
        <span className="top">{meme.topText}</span>
        <br></br>
        <span className="bottom">{meme.bottomText}</span>
        
      
      </div>
      </div>
    </div>
  )
}