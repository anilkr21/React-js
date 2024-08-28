import { Box, Stack } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import PrimarySidebar from './PrimarySidebar'
import SecondarySidebar from './SecondarySidebar'
import Feed from './Feed'
import Rightsidebar from './Rightsidebar'

function DashBoard() {
  return (
    <Box sx={{backgroundColor:'#212f41', height: '100vh', width: '100%'}} >
        <NavBar />
        <Stack direction={'row'} spacing={2}>
          <PrimarySidebar />
          <SecondarySidebar />
          <Feed />
          <Rightsidebar />
        </Stack>
        
    </Box>
  )
}

export default DashBoard