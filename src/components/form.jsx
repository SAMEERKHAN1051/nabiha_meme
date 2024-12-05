import React from 'react';
import {useState , useId} from 'react';

export default function Form(){
  /*onchange practice*/
  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
  })
 const id = useId();
  function changeValue(event){
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
        [name]:type === "number" ? checked : value
        
      }
    })
    
  }
  function clickMe (event){
    event.prevetDefault();
    console.log(formData);
    
  }

  /*Get post method*/
  function handleSubmit(event){
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl)
    const firstName= formData.get("firstName");
    console.log(firstName)
  }

  /*actionn method in form*/
  function signUp(formData){
    console.log(Object.fromEntries(formData))
  }
  
  return (
    <>
   { /*Form 1*/}
      <form onSubmit = {clickMe}>
      <label htmlFor = {id + 'firstName'}>First name :</label>
    <input type = "text" placeholder = "First Name"
      name = "firstName"
      value ={formData.firstName}
      onChange = {changeValue}
      />

<br/ >
  <label htmlFor = {id + 'lastName'}>Last name :</label>
      
      <input type = "text" placeholder = "Last Name"
      name = "lastName"
      value= {formData.lastName}
      onChange= {changeValue}
        />
        <button>Submit</button>
      </form>
      {formData.firstName}
      {formData.lastName}



      {/*form 2*/}
      <form onSubmit = {handleSubmit}>
      <input type = "text" placeholder = "First Name"
        name = "firstName"
        method= "post"
        />
        <button>click me</button>
      </form>

      {/*form 3*/}
      <form action={signUp}>
        <input type = "email" placeholder = "email"
          name = "email"
          />
              <input type = "text" placeholder = "first Name"
        name = "firstName"
        />
        <input type = "text" placeholder = "last Name"
          name = "LastName"
          />
        <button>click me</button>
                          
      
      </form>
      
    </>
  )
}
