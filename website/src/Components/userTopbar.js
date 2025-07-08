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
 import { Link, useNavigate } from 'react-router-dom';
 import Modal from '@mui/material/Modal';
 
//  const style = {
//    position: 'absolute',
//    top: '50%',
//    left: '50%',
//    transform: 'translate(-50%, -50%)',
//    width: 400,
//    bgcolor: 'background.paper',
//    border: '2px solid #000',
//    boxShadow: 24,
//    p: 4,
//  };
// export default function Topbar(props) {

//     const theme = useTheme();
//     const colorMode = useContext(ColorModeContext);

//    const colors = tokens(theme.palette.mode);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [modalEl, setModalEl] = useState(false);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleModalClick = () => {
//     setModalEl(true);
//   };
//   const handleModalClose = () => {
//     setModalEl(false);
//   };

//   const logOuthandleClose = () =>{
//     setAnchorEl(null);
//     localStorage.removeItem('token')
//   }

  
//   const getAvatarUrl = (image) => {
//     if (image) {
//       const base64Url = `data:image/jpeg;base64,${image.toString('base64')}`;
//       return base64Url;
//     }
//     return '';
//   };

//   return (
//     <Box  display="flex" justifyContent="space-between" p={2}>
//       <Box
//          display="flex"
//          backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//        >
// {/* //         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
// //         <IconButton type="button" sx={{ p: 1 }}>
// //           <SearchIcon />
// //         </IconButton> */}
//        </Box>
//       <Box display={"flex"}>
//       <IconButton onClick={colorMode.toggleColorMode}>
//            {theme.palette.mode === "dark" ? (
//              <DarkModeOutlinedIcon />
//            ) : (
//              <LightModeOutlinedIcon />
//            )}
//          </IconButton>
//       <IconButton>
//            <NotificationsOutlinedIcon />
//          </IconButton>
       
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             {/* <Avatar sx={{ width: 32, height: 32 }} src={getAvatarUrl(props.user.image)} /> */}
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         // onClick={handleClose}
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
//         <MenuItem onClick={handleModalClick}>
//           <Avatar /> Edit Profile
//           <Modal
//         open={modalEl}
//         onClose={handleModalClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
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
//         <Link to="/" style={{ textDecoration: 'none', color:`$(colors.primary[100])` }}>
//         <MenuItem onClick={logOuthandleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" to="/" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//         </Link>
//       </Menu>
//     </Box>
//   );
// }







import {
  AppBar,
  Toolbar,
  Button,
  FormControlLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {  styled } from "@mui/material/styles";
import {makeStyles} from "@material-ui/core";

import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';

// Styling for the modal content
const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,

  
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Topbar = (props) => {
      const theme = useTheme();
     const colorMode = useContext(ColorModeContext);
         const colors = tokens(theme.palette.mode);
         const classes = useStyles();
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

    const getAvatarUrl = (image) => {
    if (image) {
      const base64Url = `data:image/jpeg;base64,${image.toString('base64')}`;
      return base64Url;
    }
    return '';
  };

const navigateUpdate = ()=>{
  navigate('/user/update')
}

const logOuthandleClose = () =>{
  setAnchorEl(null);
  localStorage.removeItem('user-token')
}

  return (
    <>
       <Box  display="flex" justifyContent="space-between" p={2}>
       <Box
         display="flex"
         backgroundColor={colors.primary[400]}
        borderRadius="3px"
       >
{/* //         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton> */}
       </Box>
        <Toolbar>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
             <DarkModeOutlinedIcon />
           ) : (
             <LightModeOutlinedIcon />
           )}
         </IconButton>
      <IconButton>
           <NotificationsOutlinedIcon />
         </IconButton>
          {/* <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Topbar Example
          </Typography>  */}

          <Tooltip title="Account settings">
           <IconButton
            onClick={handleMenuClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            aria-label="menu"
          >
         <Avatar sx={{ width: 32, height: 32 }} src={getAvatarUrl(props.user.image)} />

          </IconButton>
        </Tooltip>

        </Toolbar>
      </Box>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={navigateUpdate}>
        <ListItemIcon>
             <Avatar fontSize="small" />
           </ListItemIcon>
           Edit Profile
           </MenuItem>
        <MenuItem onClick={handleMenuClose}><Avatar /> Edit Profile</MenuItem>
        <Link to="/" style={{ textDecoration: 'none', color:`white` }}>
        <MenuItem onClick={logOuthandleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Link>
      </Menu>
      <Modal className={classes.modal} open={modalOpen} onClose={handleModalClose}>
        <Box className={classes.paper}>
        <StyledModalBox>
        <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          <Button onClick={handleModalClose}>Close</Button>
        </StyledModalBox>
        
        </Box>
      </Modal>
    </>
  );
};

export default Topbar;
