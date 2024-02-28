import React, { useState } from 'react'
import './Homem.css';
import { addkitap } from './firebase';
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import {Button , Checkbox, Stack , TextField, fabClasses}from'@mui/material'



import kitaps from './store/kitaps';
import { useSelector } from 'react-redux';
import Bar from './Bar';




function Home() {
    const [yazar, setYazar]= useState('')
    const [kitap, setKitap]= useState('')
    const [okundular , setOkundular] = useState(false);
    const [ satildi , setSatildi] = useState(false);

    const {user} = useSelector(state => { return state.auht})
   

 
   
    const Ekle =  async e =>{

        e.preventDefault();
      
         
    console.log( 
   await addkitap({
         yazar,
         kitap,
        okundular,
        satildi,
        uid:user.uid,
        begen:false,
       
        begenler:[]
        
       })
    ) 
       
       setKitap('')
       setYazar('')

       console.log(addkitap)
      }

      console.log(kitaps)

  return (
    <div>
    <Bar/>
   
    <div className='hepsi'>
    <div  className=' butun'>
    
      <h2> Kitap Ekle </h2>
      <Stack spacing={{xs: 5 , sm: 4 , mb:6}}>

       <TextField type='text' margin="normal" color="secondary"  id="outlined-basic" label="yazar İsimi" variant="standard" value={yazar} onChange={e=> setYazar(e.target.value)} ></TextField>
       <TextField type='text'  margin="normal" color="secondary" id="outlined-basic" label="kitap ismi" variant="standard"  value={kitap} onChange={e=> setKitap(e.target.value)} className='Kitap' ></TextField>
      <div > Okudun mu ? <Checkbox  name="c1" checked={okundular} onChange={e => setOkundular(e.target.checked)} /></div>
      <div > Satıldı Mı <Checkbox  name="c1" checked={satildi} onChange={e => setSatildi(e.target.checked)} /></div> 
      
      
       <div>
      
       <Button onClick={Ekle} color="secondary" variant="contained" startIcon={<AddIcon/>}>Ekle</Button>
       
       </div>
       </Stack>

    
    </div>

    <div>
           
    
        </div>
    </div>
    </div>

  )
}



export default Home;
