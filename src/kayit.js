import { useState } from 'react';
import {Kayit} from'./firebase'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function KayitOl() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const HandleChange = async e =>{
      e.preventDefault();
      const user = await Kayit(email,password);
      console.log(user)
      setPassword('')
      setEmail('')
  
    }
  return (
    <div>
      <div>
        <h1>Kayıt Ol</h1>
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
       <Button variant="contained" size="large" type='submit' onClick={HandleChange}>Kayıt ol </Button>
       </div>
      </form>
      </Box>
    </div>
  )
}

export default KayitOl

