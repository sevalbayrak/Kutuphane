import React, { useState } from 'react'
import './Goster.css'
import { Detele, auht, updates } from './firebase'
import { Button, Checkbox, Stack, Tab } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import kitaps, { Okundu, Search } from './store/kitaps';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Bar from './Bar';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
















function Goster() {


  const dispatch = useDispatch();
  const search = useSelector((state) => {
    return state.kitaps.search;
  });

  const [sec , setSec] = useState(null)
  const { kitaplar } = useSelector(({ kitaps: { search, kitaps } }) => {
    const filter = kitaps.filter( function(item )  { return  item.yazar.toLowerCase().includes(search.toLowerCase()) && (item.uid === auht.currentUser.uid)  &&  (sec === null || item.okundular === sec)} ) ;
    

    return {
      kitaplar: filter,
    }

  })





  const update = async () => {
    await updates(degisken
      , {
        yazar: yeniley,
        kitap: yenilek,
        
      })




    handleClose()
  }
 


  const updaess = async e => {
    await updates(e.id,
      {
        ...e,

        okundular: !e.okundular

      })
  }

  const satal = async e => {
    await updates(e.id,
      {
        ...e,

        satildi: !e.satildi

      })
  }



  const Deteless = (id)=> {
   setOpens(true)
   setDegisken(id)

  }
   const updatess =  async ()=>{
    const result = await Detele(degisken);
   }
  const [open, setOpen] = useState(false);
  const [yeniley, setYeniley] = useState('');
  const [yenilek, setYenilek] = useState('');
  const [degisken, setDegisken] = useState('');
  const [opens, setOpens] = useState(false);
 
  console.log(sec)
  




  const handleClickOpen = (id, yazar, kitap) => {
    setOpen(true);
    setDegisken(id);
    setYeniley(yazar)
    setYenilek(kitap)

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloses = () => {
    setOpens(false);
  };






  return (

    <div>
      <div className='bar'><Bar/></div>
      
      <div className='hepsi'>
<div className='arama'>
      <FormControl variant="standard">
        
        <Input
        
          className='aramabutton'
          onChange={(event) => {
            dispatch(Search(event.target.value));
          }}
          value={search}
          startAdornment={
            <InputAdornment position="start">
           <SearchIcon/>
            </InputAdornment>
          }
         
        />
      </FormControl>
      <FormControl>
    
      <RadioGroup
        row
        
      
      >
        <FormControlLabel  checked={sec == true}   onChange={(e) => { setSec(true )}} control={<Radio />} label="Okundu"  />
        <FormControlLabel checked={sec == false}   onChange={(e) => { setSec( false)}}  control={<Radio />} label="Okunmadı"  />
        <FormControlLabel  checked={sec == null}  onChange={(e) => { setSec( null)}}   control={<Radio  />} label="Hepsi"  />
       
      </RadioGroup>
    </FormControl>
    </div>


    

      <div>

        <Table sx={{ width: "900px" }} size="small" aria-label="a dense table" >
          <TableHead>
            <TableRow >
              <TableCell align="left">Okundu</TableCell>
              <TableCell align='left'>Satıldı</TableCell>
              <TableCell align="left" color='yellow'> Kitap İsmi</TableCell>
              <TableCell align="left">Yazar İsmi</TableCell>
              <TableCell align="left">İşlemler</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {kitaplar.map((kitap, index) => (


              <TableRow

                key={kitap.id}
                sx={index % 2 === 0 ? { border: 0, backgroundColor: 'white' } : { border: 0, backgroundColor: 'gray' }}
                


              >


                <TableCell> <Checkbox  checked={kitap.okundular} onChange={e => { updaess(kitap)   }} /></TableCell>
                <TableCell> <Checkbox  checked={kitap.satildi} onChange={e => { satal(kitap)   }} /></TableCell>
                <TableCell align="left">{kitap.yazar}</TableCell>

                <TableCell align="left">{kitap.kitap}</TableCell>
                <TableCell style={{ width: "80px" }}> <Stack><Button onClick={() => Deteless(kitap.id)} color="error" fontSize="small" variant="contained" startIcon={<DeleteIcon fontSize="small" />}>Delete</Button>

                </Stack></TableCell>
                <TableCell style={{ width: "80px" }}>

                  <Stack><Button onClick={() => handleClickOpen(kitap.id, kitap.yazar, kitap.kitap)} value={degisken} color="primary" fontSize="small" variant="contained" startIcon={<EditIcon fontSize="small" />}>Edit</Button>

                  </Stack>
                </TableCell>


              </TableRow>

            ))}
          </TableBody>

        </Table>


      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Kitap Güncelle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kitap bilgilarini güncelleyiniz
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={e => setYenilek(e.target.value)}
            label="Kitap İsmi"
            value={yenilek}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={yeniley}
            label="Yazar"
            onChange={e => setYeniley(e.target.value)}
            fullWidth
            variant="standard"
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Kapat</Button>


          <Button onClick={update}>Güncelle</Button>

        </DialogActions>
      </Dialog>
      <div>
      <Dialog open={opens} onClose={handleCloses}>
        <DialogTitle>Emin Misiniz </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seçtiğiniz Kitapı Silecek Misin ??
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses}>Kapat</Button>


          <Button onClick={updatess}>Güncelle</Button>

        </DialogActions>
      </Dialog>

     

        

      </div>



    </div>
    </div>

  )
}

export default Goster
