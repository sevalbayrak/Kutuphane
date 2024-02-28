
import { useSelector } from 'react-redux';
import './Akis.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { pink } from '@mui/material/colors';

import { updates } from './firebase';

function Akis() {

  const {kullanici} = useSelector(state => {return state.kullanici})
  const {kitaps} = useSelector(state => {return state.kitaps})
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 

  const Begendi = async (e)=>{
    await updates(e.id,
      {
        ...e,

        begen: !e.begen

      })
  }
  
  return (
    <div className='tab'>
      
       
          {kitaps.map((kitap , index )=>{
             
            return(
              <div key={index}>
              {kullanici[0] &&
              <>
              
                  <div >
                    <div className='comp'>
                  <img className='resims' id='fark' src={ kullanici[0].imgUrl}  width={50} height={50}/>
                  <h4 className='h4'>{kullanici[0].displayName}</h4>
                  </div>
                  <div >
                <h4> Kitap yazarı : {kitap.yazar}</h4>
                <h4> Kitabın Adı :{kitap.kitap}</h4>
                </div>
               
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}   sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },

  }}  checked={kitap.begen} onChange={ (e) =>Begendi(kitap)}/>
      
                <hr/>
                  
                  
                  
            
             
                
                </div> 
                </>
                
             
              }
          
              </div>
            )
             
          })}

          
        
          

     
      
    </div>
  )
        }

export default Akis
