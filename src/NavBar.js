// import * as React from 'react';
import { AppBar, Toolbar,IconButton, Typography,Stack} from "@mui/material";
import {Link} from 'react-router-dom'
 import { useNavigate } from 'react-router-dom';

 function NavBar()  {
 const navigate = useNavigate();

 function handleClick(){
  navigate("/books");
  navigate("/addbook");
 }

   
  


// const NavBar = () =>{
  return(
    <AppBar position="static" style={{ backgroundColor: '#DC7633' }}>
      <Toolbar>
        <IconButton size= 'large' edge='start'>
          </IconButton>
          <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          Library Management System
          </Typography>
                  
          <Stack direction='row' spacing={3}>
            <Link to="/"  >
              Home
            </Link>
            
             <Link to="/books"  onClick={handleClick}>
    List Of Books  
    </Link>

    <Link to="/addbook" onClick={handleClick}> 
           Add Books
    </Link>
          </Stack>
      </Toolbar>
    </AppBar>
   )
  }

 export default NavBar;