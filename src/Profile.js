import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ArkadasKitap, ArkadasProfil, auht, updates } from './firebase';
import './YanProfil.css'

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { pink } from '@mui/material/colors';




function Profile  ()  {

    const {uid} = useParams();
    const arkadasProfil = useSelector(state => {return state.kullanici.arkadasProfil})
    const AkadasKitap = useSelector( state => {return state.kitaps.AkadasKitap})
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
    const {user} = useSelector(state => { return state.auht})
    const [ arkadasBegendi , setArkadasBegendi] = useState(false)
   
    console.log(uid)

   useEffect(  ()=>{

    async function guncelle (){
    if(uid){
        await ArkadasProfil(uid)
        await ArkadasKitap(uid)
    }
}

 guncelle()

   },[uid])

   const Begendi =  async (arkadas)=>{

    let yeniBegenenler = []
    
    if( arkadas.begenler.includes(auht.currentUser.uid)){
      yeniBegenenler =  arkadas.begenler.filter(uid => auht.currentUser.uid != uid )
      setArkadasBegendi(false)
    }
    else{
      console.log(arkadas.begenler);
      yeniBegenenler = [...arkadas.begenler];
      yeniBegenenler.push(auht.currentUser.uid)
      setArkadasBegendi(true)
    }

    await updates(arkadas.id,
      {
       ...arkadas,

        begenler: yeniBegenenler

      })

    
  }

   
  return (
 <div>
        <div>
     <img   className='resim' src={arkadasProfil.imgUrl} height={120} width={120}  ></img>
    <h3>{arkadasProfil.displayName}</h3>
    </div>

    <div className='tab'>
      
        {AkadasKitap?.map((arkadas , index)=>{

             return(
                <div key={index}>
                {arkadasProfil &&
                <>
                
                    <div >
                      <div className='comp'>
                    <img className='resims' id='fark' src={ arkadasProfil.imgUrl}  width={50} height={50}/>
                    <h4 className='h4'>{arkadasProfil.displayName}</h4>
                    </div>
                    <div >
                  <h4> Kitap yazarı : {arkadas.yazar}</h4>
                  <h4> Kitabın Adı :{arkadas.kitap}</h4>
                  </div>
                 
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}   sx={{
      color: pink[800],
      '&.Mui-checked': {
        color: pink[600],
      },
  
    }} checked={arkadasBegendi} onChange={ event =>Begendi(arkadas)} />
        
                  <hr/>
                    
                    
                    
              
               
                  
                  </div> 
                  </>
                  
               
                }
            
                </div>
              )
               
             })}
    </div>

  
    
    

 </div>
      
      
       
   
)
}

export default Profile
