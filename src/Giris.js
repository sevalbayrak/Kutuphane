import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {logout} from'./firebase'
import { logoutol } from './store/auht'
import './Goster.css'
import Bar from './Bar'
import Profil from './Profil'
import Akis from './Akis'
import Arama from './Arama'





function Giris() {

    const dispaht = useDispatch();
    const nagivate = useNavigate();

    const {user} = useSelector(state => { return state.auht})

    const loginout =  async()=>{
        await logout()
        dispaht(logoutol())
        nagivate('/gir', {
          replace:true
        })
    }
    if(user){
        return(
          <>
          <div>

            <div>
              <Bar/>
            </div>
            <div>
              <Profil/>
            </div>
           

         
            <div>

        <h4>Hoşgeldin</h4>
        <h5>Oturum açık : {user.email}</h5>
        <Button onClick={loginout}>Çıkış yap</Button>
  
      
        </div>
        <div>
       
        </div>
       
        </div>
        <div>
        <Akis/>
        </div>
        <Arama/>
        </>
        )
    }
  return (
    <div>
        <Link to= '/kayit' >Kayıt Ol</Link>
        <Link to='gir' >Giriş Yap</Link>
      
    </div>
  )
}

export default Giris
