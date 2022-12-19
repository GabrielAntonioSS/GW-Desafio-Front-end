import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import './login.css'

function Login() {
  return (
    <div className='conteudoLogin'>
        <Header/>
        <div className='form'>

            <input className='input' type="text" placeholder='Email' />
            <input className='input' type="passworld" placeholder='Passworld' />
            <button className='formButton'>
            <Link to={"listUser"}>
                <p className='buttonName'>
                    Login
                </p>
            </Link>
            </button>

        </div>
    </div>
  )
}
export default Login