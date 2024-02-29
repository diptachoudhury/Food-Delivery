import {
    Box,
    Button,
    Chip,
    Container,
    IconButton,
    Stack,
    SvgIcon,
    Typography,
    useMediaQuery,
    Card,
    CardContent,
    TextField
  } from '@mui/material';
  import {useState, useEffect} from 'react';
  import { Outlet, Link } from "react-router-dom";


  export const TopNav = () => {

 
    return (
      <>

        
        <Box sx={{  left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        pt: 2}}>
        <Container maxWidth='xl' sx={{ mt: 1, px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff',  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)', borderRadius: '12px', }}>
          <Link to="/"> <Typography>Home</Typography></Link>
           <Link to ='/FoodList'><Typography>FoodList</Typography></Link>
            <Link to ='/test'><Typography>Test</Typography></Link>
        </Container>
        </Box>
        <Container maxWidth='xl'sx={{mt:20}}>
          <Outlet/>  
        </Container>
       
      </>
    );
  };