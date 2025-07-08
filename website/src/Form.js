import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form1 = () => {
  const [isSubmitted,setisSubmitted] = useState(false)

  function submitForm () {
    setisSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img src='img/new3.svg' alt='spaceship' className='form-img'/>
        </div>
        {!isSubmitted ? (<FormSignup submitForm={submitForm}/>) : (<FormSuccess/>)}
      </div>
    
    </>
  )
}

export default Form1