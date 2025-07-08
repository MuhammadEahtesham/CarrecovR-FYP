import React from 'react'
import './Form.css'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <div className='form-success'> We have received your request!
      </div>
      <img src='img/img-3.svg ' alt='success-image' className='form-img-2' /> 
      <span className='form-input-loginnew'>
               Login <a href='/login'>here</a>
      </span> 
    </div>
  )
}

export default FormSuccess