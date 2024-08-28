
// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';




//     const Search = styled('div')(({ theme }) => ({
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//           backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//           marginLeft: theme.spacing(3),
//           width: 'auto',
//         },
//       }));
      
//       const SearchIconWrapper = styled('div')(({ theme }) => ({
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }));
      
//       const StyledInputBase = styled(InputBase)(({ theme }) => ({
//         color: 'inherit',
//         '& .MuiInputBase-input': {
//           padding: theme.spacing(1, 1, 1, 0),
//           // vertical padding + font size from searchIcon
//           paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//           transition: theme.transitions.create('width'),
//           width: '100%',
//           [theme.breakpoints.up('md')]: {
//             width: '20ch',
//           },
//         },
//       }));
      
//       export default function NavBar() {
//         const [anchorEl, setAnchorEl] = React.useState(null);
//         const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      
//         const isMenuOpen = Boolean(anchorEl);
//         const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      
//         const handleProfileMenuOpen = (event) => {
//           setAnchorEl(event.currentTarget);
//         };
      
//         const handleMobileMenuClose = () => {
//           setMobileMoreAnchorEl(null);
//         };
      
//         const handleMenuClose = () => {
//           setAnchorEl(null);
//           handleMobileMenuClose();
//         };
      
//         const handleMobileMenuOpen = (event) => {
//           setMobileMoreAnchorEl(event.currentTarget);
//         };
      
//         const menuId = 'primary-search-account-menu';
//         const renderMenu = (
//           <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//           </Menu>
//         );
      
//         const mobileMenuId = 'primary-search-account-menu-mobile';
//         const renderMobileMenu = (
//           <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//           >
            
//             <MenuItem>
//               <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                 <Badge badgeContent={4} color="error">
//                   <MailIcon />  
//                 </Badge>
//               </IconButton>
//               <p>Messages</p>
//             </MenuItem>
//             <MenuItem>
//               <IconButton
//                 size="large"
//                 aria-label="show 17 new notifications"
//                 color="inherit"
//               >
//                 <Badge badgeContent={17} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="primary-search-account-menu"
//                 aria-haspopup="true"
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <p>Profile</p>
//             </MenuItem>
//           </Menu>
//         );
//         return(

//             <Box sx={{ flexGrow: 1, }}>
//             <AppBar position="static" sx={{backgroundColor:'#2c405a', borderRadius:'none'}}>
//               <Toolbar>
//                 <IconButton
//                   size="large"
//                   edge="start"
//                   color="inherit"
//                   aria-label="open drawer"
//                   sx={{ mr: 2 }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Typography
//                   variant="h6"
//                   noWrap
//                   component="div"
//                   sx={{ display: { xs: 'none', sm: 'block' } }}
//                 >
//                   MUI
//                 </Typography>
//                 <Search>
//                   <SearchIconWrapper>
//                     <SearchIcon />
//                   </SearchIconWrapper>
//                   <StyledInputBase
//                     placeholder="Search…"
//                     inputProps={{ 'aria-label': 'search' }}
//                   />
//                 </Search>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                   <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                     <Badge badgeContent={4} color="error">
//                       <MailIcon />
//                     </Badge>
//                   </IconButton>
//                   <IconButton
//                     size="large"
//                     aria-label="show 17 new notifications"
//                     color="inherit"
//                   >
//                     <Badge badgeContent={17} color="error">
//                       <NotificationsIcon />
//                     </Badge>
//                   </IconButton>
//                   <IconButton
//                     size="large"
//                     edge="end"
//                     aria-label="account of current user"
//                     aria-controls={menuId}
//                     aria-haspopup="true"
//                     onClick={handleProfileMenuOpen}
//                     color="inherit"
//                   >
//                     <AccountCircle />
//                   </IconButton>
//                 </Box>
//                 <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                   <IconButton
//                     size="large"
//                     aria-label="show more"
//                     aria-controls={mobileMenuId}
//                     aria-haspopup="true"
//                     onClick={handleMobileMenuOpen}
//                     color="inherit"
//                   >
//                     <MoreIcon />
//                   </IconButton>
//                 </Box>
//               </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             {renderMenu}
//           </Box>
//         );
//     }


import { alpha, AppBar, Avatar, Badge, Box, Divider, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, styled, SwipeableDrawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { FaInbox, FaMailchimp } from 'react-icons/fa6';
import { ImMail } from 'react-icons/im';


// CORONO TOOLBAR
const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});

// SEARCH
const Search = styled('div')(({ theme }) => ({
      position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            height:'30px',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(3),
              width: 'auto',
              height:'40px',
            },      
          }));
    //SearchICON and its InputBase
        const SearchIconWrapper = styled('div')(({ theme }) => ({
                 padding: theme.spacing(0, 2),
                 height: '100%',
                 position: 'absolute',
                 pointerEvents: 'none',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
               }));
              
               const StyledInputBase = styled(InputBase)(({ theme }) => ({
                 color: 'inherit',
                 '& .MuiInputBase-input': {
                   padding: theme.spacing(1, 1, 1   , 0),
                   // vertical padding + font size from searchIcon
                  
                   paddingLeft: `calc(1em + ${theme.spacing(1)})`,
                   transition: theme.transitions.create('width'),
                   width: '100%',
                   [theme.breakpoints.up('md')]: {
                     width: '20ch',
                     alignItems:'center',
                     paddingLeft: `calc(1em + ${theme.spacing(1)})`,
                     
                   },
                 },
               }));

        
//BADGES
const Icon= styled('div')(({theme})=>({
    display:'flex',
    gap:'10px',
    alignItems:'center',
}));



const  NavBar =()=> {

    const [open, setOpen]= useState(false);

    // Account rightbar
const [state, setState] = React.useState({
    right: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FaInbox /> : <FaMailchimp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FaInbox /> : <ImMail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <AppBar sx={{position:'sticky', backgroundColor:'#2c405a'}} >
        <StyledToolBar>
            <Typography varient='h6'>
                CORONO
            </Typography>
            <Search>
                   <SearchIconWrapper>
                     <Search />
                   </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
            </Search>
            
            <Icon>
            <Divider orientation="vertical" flexItem  color="white"/>
                <Badge badgeContent={4} color="primary">
                    <NotificationsNoneIcon />
                
                </Badge>
                <Divider orientation="vertical" flexItem  color="white"/>
                <Badge color="primary">
                    <SettingsIcon />
                </Badge>
                <Divider orientation="vertical" flexItem  color="white"/>
                <Avatar  onClick={toggleDrawer('right', true)} variant="square" sx={{height:"30px", width:"30px"}} src='https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg'/>
               <Typography onClick={toggleDrawer('right', true)}  sx={{display:'inline-block'}}>
                    Jhon Smith 
                    <Typography sx={{fontSize:'0.7rem', color:'lightgrey'}}>John21 </Typography>
               </Typography>
            </Icon>
        </StyledToolBar>
        <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {list('right')}
            </SwipeableDrawer>
        
        
    </AppBar>
  )
}

export default NavBar