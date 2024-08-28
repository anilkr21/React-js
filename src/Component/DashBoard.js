import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './NavBar'
import PrimarySidebar from './PrimarySidebar'
import SecondarySidebar from './SecondarySidebar'
import Feed from './Feed'
import Rightsidebar from './Rightsidebar'

function DashBoard() {

  const [isSecondarysidebarOpen, setIsSecondarySidebarOpen] = useState(false);

  const toggleSecondarySidebar =()=>{
        setIsSecondarySidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{backgroundColor:'#212f41', height: '100vh', width: '100%'}} >
        <NavBar />
        <Stack direction={'row'} spacing={2}>
            <PrimarySidebar onIconClick={toggleSecondarySidebar} />
            <Box sx={{transition:'width 0.3s ease',
                      width: isSecondarysidebarOpen ? '200px': '0px',
                      overflow: 'hidden', }}>
              <SecondarySidebar />
            </Box>
            <Box flex={isSecondarysidebarOpen ? 5 : 6}
                  sx={{transition:'width 0.3s ease'}}>
              <Feed />
            </Box>
            <Rightsidebar />
        </Stack>
        
    </Box>
  )
}

export default DashBoard