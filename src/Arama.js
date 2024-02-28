import {   TextField } from '@mui/material'

import './Arama.css'
import { useDispatch, useSelector } from 'react-redux';
import kullanici, { Aramas, Searchs, set } from './store/kullanici';
import { useState } from 'react';
import { searchKullanici } from './firebase';
import {NavLink} from'react-router-dom'





function Arama() {
const dispatch = useDispatch()
const [search, setSearch] = useState();
  const arananKullanicilar = useSelector(state => {return state.kullanici.arananKullanicilar})
  const {kullanici} = useSelector(state => {return state.kullanici})
  
   
  const KullaniciArama =  async (value,) =>{
    setSearch(value);
          await searchKullanici(value);
          console.log('bu')
          
          
  }
 


  return (
    <div className='ensol' >
      
        <div>
      <TextField className='text' placeholder='Kullancı Arama'
       onChange={ (event) => KullaniciArama(event.target.value)}
       value={search}
      
      />
     
          </div>

         <div>
         <div>
        
      {arananKullanicilar?.map((kullan , index) =>(
        <div className='AkisButon' key={index}>
          <NavLink to={`${(kullan.uid)}`}>
          <button >{kullan.displayName}</button>
          </NavLink>
        </div>
      ))}
   
     
  
       
     
     
     
      </div>
  
         </div>
 
    
      
   
     
    </div>
  )
}

export default Arama;
