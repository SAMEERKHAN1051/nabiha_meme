import './App.css'
import Button from './components/button'
import Array from './components/updateArray'
import Contact from './components/contact'
import contactData from './components/contactData'

import Form from './components/form'

import Main from './chefClaude/main'

import Meme from './memeGenerator/meme'

export default function App() {
  {/*const contactList = contactData.map(item =>{
    return <Contact 
       name = {item.name}
       age = {item.age}
       phone = {item.phone}
       email = {item.email}
         />
  })*/}
  /*const score = 50*/
  {/*const  = 80;
  const number = 1;

  const result = number===2 ? (score===80 ? 'win' : 'lose') : score === 80 ? 'lose' : 'win'*/}
  return (
    <div className="main">
      {/*{contactList} */}
     {/*score>=90 ? 
      <h1>A</h1> : 
      score>=80?
      <h1>B</h1>:
      <h1>C</h1>*/}
    {/*  <Button /> */}
    { /* {result}*/}
     {/* <Array />*/}

      {/*<Main />*/}
      {/*<Form />*/}

      <Meme />
    </div>
  )
}
