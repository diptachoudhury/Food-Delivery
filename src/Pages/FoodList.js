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
    TextField,
    Link
  } from '@mui/material';
  import {useState, useEffect} from 'react';

  export const FoodList = () => {
    const imageContext = require.context('../Images', false, /\.(png|jpe?g|gif|avif)$/);
    const imagePaths = imageContext.keys();
 
    return (
      <>
      <Box sx={{pt:6}}>
          <Typography variant='h1' sx={{fontSize:'26px !important'}}>Whats on your mind?</Typography>
          
          {imagePaths.map((imagePath, index) => (
            <img
            key={index}
            src={imageContext(imagePath)}
            style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            alt={`Image ${index + 1}`}
            />
          ))}
      </Box>  
      </>
    );
  };