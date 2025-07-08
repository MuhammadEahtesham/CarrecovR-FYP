import React from 'react'
import loginImg from '../../images/image1.svg'
import '../Logins/style.css'

export class LoginUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div className='base-container' ref={this.props.containerRef}>
            <div className='header'>Login as user</div>
            <div className='content'>
                <div className='image'>
                    <img src={loginImg} />
                </div>
                <div className='form3'>
                    <div className='form-group'>
                        <label htmlFor='adminname' className='lLabel'>Admin ID</label>
                        <input type="text" name="adminname" placeholder='ex: P1234' className='linput'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='adminpass' className='lLabel'>Admin ID</label>
                        <input type="password" name="adminpass" placeholder='Enter password' className='linput'/>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <button type='button' className='btn'> Login </button>
            </div>
        </div>
    }
}

export default LoginUser
