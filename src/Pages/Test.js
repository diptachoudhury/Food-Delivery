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

  export const Test = (props) => {
 
    return (
      <>
        <Container maxWidth='xl'>
          <Typography sx={{mt:8}}>Blog</Typography>
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw2hys8HgkRSCxKCQSU3EepN&ust=1709097463194000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjE_KriyoQDFQAAAAAdAAAAABAE'/>
        </Container>
      </>
    );
  };