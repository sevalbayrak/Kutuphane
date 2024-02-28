import { useState } from 'react';
import {login} from'./firebase'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Gir() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate= useNavigate()

  
    const HandleChange = async e =>{
      e.preventDefault();
      const user = await login(email,password);
      if(user){
    

        navigate('/', {
          replace:true
        })
      }
      console.log(user)
      setPassword('')
      setEmail('')
  
    }
  return (
    <div>
      <div>
        <h1>Giriş Yap</h1>
      </div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2 , width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form  >
        <TextField    label="email" variant="outlined"  type='email' placeholder='email gir' value={email} onChange={e=> setEmail(e.target.value)} />
        <TextField  label="şifre" variant="outlined"  type='password' placeholder='*****' value={password} onChange={e=> setPassword(e.target.value)}/>
       <div>
       <Button variant="contained" size="large" type='submit' onClick={HandleChange}>Giriş Yap </Button>
       </div>
      </form>
      </Box>
    </div>
  )
}

export default Gir

