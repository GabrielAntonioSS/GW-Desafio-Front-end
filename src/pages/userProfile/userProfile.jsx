import React, { useEffect, useState } from 'react'
import './userProfile.css'
import Header from '../../components/header/header'
import logo from '../../assets/user.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom';


function UserProfile() {

  const id=window.location.href.split("/")[4]
  console.log(id)

  const [profile, setProfile] = useState([])
  const response = [
    {
      firstName : 'Gabriel',
      lastName : 'Antonio',
      email : 'gabrielantonio@email.com'
    }
  ]
  useEffect(()=> {
    api.get(`users/${id}`).then((response)=> 
      setProfile(response.data.data)
    )
  },[])
  console.log('profile',profile)

  return (
    <div className='conteudoUserProfile'>
        <Header/>
          <>
            <div className='userContainerProfile'>
              <img className='contedoImg' src={profile.avatar} width='150px' alt='img-user'/>
              <div className='conteudoUser'>
                <p className='conteudoNames'>
                    {profile.first_name} {profile.last_name}
                </p>
                <hr/>
                <p className='conteudoLabel'>
                  Email
                </p>
                <p className='ConteudoDados'>
                  {profile.email}
                </p>
              </div>
            </div>
          </>        
    </div>
  )
}
export default UserProfile