import React from 'react';
import { Box, Stack, Typography, Divider } from '@mui/material';

export const FoodCard = ({ itemName, price, address }) => {
  return (
    <>
      <Box sx={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)', width: '100%', borderRadius: '12px', backgroundColor: '#fffff', py: 2, mt:2, display:'flex', justifyContent:'space-between' }}>
        
        <Stack spacing={0.6} sx={{ px: 2 }}>
            <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '18px' }}>{itemName}</Typography>
            <Typography sx={{  fontWeight: '600' }}>{price}</Typography>
            <Typography >{address}</Typography>
        </Stack>
        <Divider/>
        <Box>
            <img src='../Images/restaurant4.avif' style={{height:'100px', width:'200px'}} />
          </Box>
      </Box>
    </>
  );
};
