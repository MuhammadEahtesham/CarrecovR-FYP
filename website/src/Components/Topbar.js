// import React from 'react';

// import {
//   Button,
//   Modal,
//   TextField,
//   makeStyles,
//   Typography,
// } from "@material-ui/core";

// import { Box, IconButton, useTheme } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

// const Topbar = () => {

//   const useStyles = makeStyles((theme) => ({
//     modal: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     paper: {
//       backgroundColor: theme.palette.background.paper,
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//       borderRadius: 10,
//       width: "50%",
//       height: "50%",
//     },
//     form: {
//       display: "flex",
//       flexDirection: "column",
//     },
//     textField: {
//       margin: theme.spacing(1),
//     },
//   }));

//   const classes = useStyles();
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [profileopen, setProfileopen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleProfileOpen = () => {
//     setProfileopen(true);
//   };

//   const handleProfileClose = () => {
//     setProfileopen(false);
//   };

//   const handleProfileChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleProfileSubmit = (e) => {
//     e.preventDefault();
//     // axios
//     //   .post("http://example.com/submit-form", formData)
//     //   .then((response) => {
//     //     console.log(response);
//     //     handleClose();
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//   };

//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//       >
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box display="flex">
//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton>
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//           </IconButton>
//         </Tooltip>
        
//       </Box>
     
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//       </Box>
    
//   );
// };

// export default Topbar;

import { useContext, useState, React } from "react";
import { ColorModeContext, tokens } from "./../theme";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useTheme } from '@emotion/react';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
 import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
 import { Link } from 'react-router-dom';

export default function Topbar(props) {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

   const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOuthandleClose = () =>{
    setAnchorEl(null);
    localStorage.removeItem('token')
  }

  const getAvatarUrl = (image) => {
    if (image) {
      const base64Url = `data:image/jpeg;base64,${image.toString('base64')}`;
      return base64Url;
    }
    return '';
  };


  return (
    <Box  display="flex" justifyContent="space-between" p={2}>
      <Box
         display="flex"
         backgroundColor={colors.primary[800]}
        borderRadius="3px"
       >
{/* //         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton> */}
       </Box>
      <Box display={"flex"}>
      {/* <IconButton onClick={colorMode.toggleColorMode}>
           {theme.palette.mode === "dark" ? (
             <DarkModeOutlinedIcon />
           ) : (
             <LightModeOutlinedIcon />
           )}
         </IconButton>
      <IconButton>
           <NotificationsOutlinedIcon />
         </IconButton> */}
       
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={getAvatarUrl(props.admin.img)} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Edit Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Link to="/" style={{ textDecoration: 'none', color:`white` }}>
        <MenuItem onClick={logOuthandleClose}>
          <ListItemIcon>
            <Logout fontSize="small"/>
          </ListItemIcon>
          Logout
        </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}