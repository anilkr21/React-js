import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'



function BalanceAndExpences() {
  return (
    <Box p={2} flexDirection={'column'} flex={2}>
      <Box sx={{display:'flex', justifyContent:'space-between'}} >
        <Typography display={'flex'} width={100} sx={{float:'left', fontSize:'0.9rem'}}  >
          Balance
        </Typography>
        <Tooltip title="Plus" >
            <IconButton  size='small'>
              <AddCircleOutlineIcon sx={{color:'#0093ee',fontSize:'medium'}} />
            </IconButton>
        </Tooltip>
      </Box>
      
    </Box>
  )
}

export default BalanceAndExpences