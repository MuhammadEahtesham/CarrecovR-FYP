import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo';
import './Form.css'

const FormSignup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validateInfo);

  return (
       <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Get started with us today! create account</h1>
            <div className='form-inputs'>
                <label htmlFor='username' className='form-label'> Username
                </label>
                <input type="text" name='username' className='form-input' placeholder='ex : Uzair.khan' value={values.username} onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='email' className='form-label'> Email
                </label>
                <input type="email" name='email' className='form-input' placeholder='ex : uzair@gmail.com' value={values.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='password' className='form-label'> Password
                </label>
                <input type="password" name='password' className='form-input' placeholder='Enter your password' value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='password2' className='form-label'> Confirm Password
                </label>
                <input type="password" name='password2' className='form-input' placeholder='Enter your password'value={values.password2} onChange={handleChange}/>
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit'>Sign up</button>
            <span className='form-input-login'>
                Already have an account ? Login <a href='/login'>here</a>
            </span>
        </form>
       </div>
  )
}

export default FormSignup