
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';



import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './Goster.css'
import React from 'react'
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
function Bar() {
  const [state, setState] = React.useState({
    
    left: false,
    
  });
 


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link to='/giris' className='linkler'>
          <ListItem disablePadding>
        
            <ListItemButton >
             
             
              <ListItemIcon>
                <HomeIcon/>
               
              </ListItemIcon>
              <ListItemText >
                Anasayfa
              </ListItemText>
             
            </ListItemButton>
           
           
           
          </ListItem>
          </Link>
          <Link to='/kitapekle' className='linkler'>
          <ListItem disablePadding>
        
            <ListItemButton >
             
             
              <ListItemIcon>
                <BookmarkAddIcon/>
               
              </ListItemIcon>
              <ListItemText >
                Kitap Ekle
              </ListItemText>
             
            </ListItemButton>
           
           
           
          </ListItem>
          </Link>
          <Link to='/kutuphane' className='linkler'>
          <ListItem disablePadding>
        
            <ListItemButton >
             
             
              <ListItemIcon>
                <BookIcon/>
               
              </ListItemIcon>
              <ListItemText >
                Kütüphane
              </ListItemText>
             
            </ListItemButton>
           
           
           
          </ListItem>
          </Link>
          </List>
      <Divider />
    
    </Box>
  );

  return (
    <div>
          <Box sx={{ flexGrow: 1,  }}>
      <AppBar position="static" sx={{ backgroundColor:'#6a5acd'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
       
           {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{color:'#fff' , fontSize:'20px' }}>Menü</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
       
          </IconButton>
          
     
        <div>
     
    </div>
      

      
         
        </Toolbar>
      </AppBar>
      
    </Box>
    </div>
  )
}

export default Bar
