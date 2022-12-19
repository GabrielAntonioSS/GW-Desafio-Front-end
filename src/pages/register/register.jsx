import React, { useState } from 'react'
import './register.css'
import Header from '../../components/header/header'
import api from '../../services/api'
import { Link, NavLink} from "react-router-dom";

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const registerUser = async() => {

        try{
            if(password === confirmPassword){
                const register = {
                    email : email,
                    password : password,
                  //confirmPassword : confirmPassword
                }
                const requestApi = await api.post('register', register)
                .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                console.log('sucesso')
            }
            
            console.log('senha invalida')
        }catch(e){
            console.log('erro', e)
        }
    }

  return (
    <div className='conteudoRegister'>
        <Header/>
    <div className='formRegister'>

        <input className='inputRegister' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input className='inputRegister' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <input className='inputRegister' type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
        
        <button className='formButtonRegister'>
        <NavLink to={"/"}>

            <p className='buttonNameRegister'>
                Register
            </p>
        </NavLink>
        {console.log("Register")}
        </button>

    </div>
</div>
  )
}
export default Register