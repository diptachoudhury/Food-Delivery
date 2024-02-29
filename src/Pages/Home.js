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
  } from '@mui/material';
  import {useState, useEffect} from 'react';
  import {RestaurantCard} from '../Components/RestaurantCard';
  import restaurantDataArray from '../Components/restaurantDataArray';
  import { Link } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { setRdata } from '../Features/Counter/restaurantDetailslice';

  export const Home = (props) => {
    const imageContext = require.context('../Images', false, /\.(png|jpe?g|gif|avif)$/);
    const imagePaths = imageContext.keys();
    const dispatch = useDispatch();
    return (
      <>
      <Box >
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
        <Typography variant='h1' sx={{fontSize:'26px !important', mt:2}}>Top Restaurants in Bangalore</Typography>
          <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          {restaurantDataArray.map((data, index) => (
            <Link to ={`/Restaurant/${data.name}`}  onClick={() => dispatch(setRdata(data))} >
            <RestaurantCard key={index} {...data}  sx={{mr:2}}/>
            </Link>
          ))}
          </Box>
      </>
    );
  };