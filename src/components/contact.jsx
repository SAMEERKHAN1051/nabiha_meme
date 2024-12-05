import React from 'react'
import './contact.css'
export default function Contact (props){
  return (
    <div>
      <div className = 'contact-card'>
    <p>Name : {props.name}</p>
    <p> Age : {props.age}</p>                 <p>Email : {props.email}</p>
    <p>Phone : {props.phone}</p>
      </div>
      
      
    </div>
  )
}