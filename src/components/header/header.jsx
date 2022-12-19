import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className='cabecalho'>
        <div className='logo'>GW Junior</div>
        <div className='botoes'>
            <Link to="/">Login</Link>
            |
            <Link to="/register">Register</Link>
        </div>
    </div>
  )
}
export default Header