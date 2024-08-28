import { Box, List, ListItem, ListItemButton, ListItemIcon, } from '@mui/material'
import { IoMdTimer } from "react-icons/io";
import { PiShoppingBagOpen } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa6";
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { TbSpeakerphone } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

function PrimarySidebar({onIconClick}) {
  return (
    <Box p={2} sx={{height:'100vh', width:'10px'}} >
            <List sx={{padding:'0px',paddingRight:'2px', width:'30px'}}>
            <ListItem disablePadding sx={{ marginBottom:'10px'}} > 
                <ListItemButton  sx={{justifyContent:'center' , left:'0', paddingLeft:'11px' }} 
                                  onClick={onIconClick}>
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                    <IoMdTimer  color='white' size={20} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom:'10px'}}>
                <ListItemButton  sx={{justifyContent:'center' , left:'0', paddingLeft:'11px'}} onClick={onIconClick}>
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                    <PiShoppingBagOpen  color='white' size={20} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom:'10px'}} >
                <ListItemButton  sx={{justifyContent:'center' , left:'0', paddingLeft:'11px'}} onClick={onIconClick}>
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                    <FaRegBell  color='white' size={20} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom:'10px'}}>
                <ListItemButton  sx={{justifyContent:'center' , left:'0', paddingLeft:'11px'}}onClick={onIconClick} >
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                    <EventAvailableOutlinedIcon  sx={{color:'whitesmoke'}} size={20} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom:'10px'}}>
                <ListItemButton sx={{justifyContent:'center' , left:'0', paddingLeft:'11px'}} onClick={onIconClick} >
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                    <TbSpeakerphone  color='white' size={20} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom:'10px'}}>
                <ListItemButton  sx={{justifyContent:'center' , left:'0', paddingLeft:'11px'}} onClick={onIconClick} >
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                  <FontAwesomeIcon icon={faChartLine}  color='white' size={20} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom:'10px'}}>
                <ListItemButton  sx={{justifyContent:'center' , left:'0', paddingLeft:'11px'}} onClick={onIconClick}>
                  <ListItemIcon  sx={{justifyContent:'center'}}>
                    <FontAwesomeIcon icon={faChartColumn} color='white' size={20}   />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
    </Box>
  )
}

export default PrimarySidebar