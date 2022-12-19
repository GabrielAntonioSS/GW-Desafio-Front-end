import React, { useEffect, useState } from 'react'
import './listUser.css'
import Header from '../../components/header/header'
import logo from '../../assets/user.png'
import api from '../../services/api'
import {Link} from 'react-router-dom'

function ListUser() {

  const[lista, setLista] = useState([])

  useEffect(()=> {
    api.get('users').then((response)=> 
      setLista(response.data.data)
    )
  },[])
  console.log('lista', lista)

  return (
    <div className='conteudoListUser'>
        <Header/>
        <p className='label'>
          List all users
        </p>
        {
          lista.map((user)=>(
          <>
          <Link to={`userProfile/${user.id}`}>
            <div className='userContainer'>
              <img className='contedoImg' src={user.avatar} width='150px' alt='img-user'/>
              <div className='conteudo'>
                <p className='conteudoLabel'>
                  First Name
                </p>
                <p className='ConteudoDados'>
                  {user.first_name}
                </p>
              </div>
              <div className='conteudo'>
                <p className='conteudoLabel'>
                  Email
                </p>
                <p className='ConteudoDados'>
                  {user.email}
                </p>
              </div>
            </div>
          </Link>
          </>
          ))
        }
    </div>
  )
}
export default ListUser