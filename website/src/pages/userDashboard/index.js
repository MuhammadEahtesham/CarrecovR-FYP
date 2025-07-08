import React, {  useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import {  Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../Components/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

import { useParams, useOutletContext  } from 'react-router-dom';
import axios from 'axios';

import AppTest from '../../Components/Test';
import {Accordion, AccordionSummary, AccordionDetails} from '../../Components/AccordianStyling';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
// import CarInfoBox from './Components/Test';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));
const accStyles = makeStyles((theme) => ({
  root: {
    background: "#f2f2f2", // set the background color of the Accordion
  },
}));

const UserDashboard = (props) => {
  
  const classes = useStyles();
  const accClasses = accStyles();

  const [carData, setCarData] = useState({})
  const [complainDisabled, setComplainDisabled] = useState(true)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userData = useOutletContext();
  const [expanded, setExpanded] = React.useState('panel1');
  const [email, setEmail] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  //console.log("Inside user: ", userData.email)
   const getData = async ()=>{

      // setEmail(userData.email)
      const email = userData.email
      console.log("HI:",email)

      // await axios.post('http://localhost:8000/api/get_one_car',{email:email})
      // .then(res => {
      //  // console.log(res.data)
      //   if(res.data !== "not ok"){
      //     setCarData(res.data)
      //     setComplainDisabled(false)
      //   }
      //   else{setComplainDisabled(true)}
      // })
      // .catch(err=>{
      //   console.log(err.message)
      //   setComplainDisabled(true)
      // })
    
  }

  
const handleComplain = ()=>{
  console.log("*************************car**********************")
  console.log("carData: ", carData[0])
  
  // carData.map((car)=>console.log("Cars: ",car.vin))
  const formData = new FormData()
  
  formData.append("address", carData[0].address)
    formData.append("vin", carData[0].vin)
    formData.append("email", carData[0].email)
    formData.append("image", carData[0].image)
    formData.append("number_plate", carData[0].number_plate)    
    formData.append("cnic", carData[0].cnic)
    formData.append("model", carData[0].model)


    console.log('==============formData======================');
    for (let [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
    console.log('====================================');

    //  axios.post('http://localhost:8000/api/complainRegister',formData)
    //  .then((response) => {
    //    console.log(response.data)
    //   //  navigate("/admin/home")
    //   }
    //    )
    //    .catch((error)=>{console.log('====================================');
    //    alert(error);
    //    console.log('====================================');})
    
}
   useEffect(()=>{
      console.log("Inside dash")
     getData()
    
    },[])
    useEffect(()=>{
      const url = "ws://localhost:8000/client-ws"
      const ws = new WebSocket(url);
      // ws.onopen = (event) => {
      //     ws.send("Client Connect");
      //   };
      
        ws.onmessage = (e) => {
          // const message = JSON.parse(e.data);
  
          if(e.data ==="Sorry! Car is not registered..."){
  
            console.log("Inside console")
            
            toast.error(e.data, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
           }
  
          else if(e.data ==="Car is registered..."){
  
            console.log("Inside console")
            
            toast.success(e.data, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
           }
            else{
              toast.info(e.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
  
          //alert(e.data)
          // console.log(message);
          // setMessages([...messages, message]);
        };
     },[])
  
    const getAvatarUrl = (image) => {
      //console.log("Image: ",image)
      if (image) {
        const base64Url = `data:image/jpeg;base64,${image.toString('base64')}`;
        return base64Url;
      }
      return '';
    };
  
    //const viewCar = carData[0].vin
  return (
    
    <Box m="20px">
       <ToastContainer/>
      {/* HEADER */}
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard for Vehicle Recovery" subtitle="Track and Manage Your Recovered Cars Effortlessly" />
      </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor='#212c42'
          overflow="auto"
        >
           <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors='white'
            p="15px"
          >
            <Typography color='white' variant="h5" fontWeight="600">
            Report Your Stolen Car and Initiate Recovery Process
            </Typography>

            <Button
                disabled={complainDisabled}
                variant="contained"
                color="success"
                p="5px 10px"
                borderRadius="4px"
                onClick={handleComplain}
              >
                Launch a complain
              </Button>

          </Box>

          
          
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Complains
            </Typography>

          </Box> */}
          {/* {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            > */}
              {/* <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box> 
          ))}*/}

          <Box
          alignItems="center"
          borderBottom={`4px solid black`}
          colors={colors.grey[100]}
          p="15px"
          >
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Profile
          </Typography>
          
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {/* <Avatar sx={{ width: 200, height: 200 }} src={getAvatarUrl(userData.image)} />

          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography> */}
          {/* <AppTest/> */}

          <Box className={classes.root}>
          <Avatar className={classes.avatar} alt={userData.username} src={getAvatarUrl(userData.image)} />
          <div>
            <Typography variant="subtitle1">{userData.username}</Typography>
            <Typography variant="body2">{userData.email}</Typography>
          </div>
        </Box>
        
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Registered Car </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography> */}

          <Box className={classes.root}>
          {/* <Avatar className={classes.avatar} alt={userData.username} src={getAvatarUrl(carData[0].image)} /> */}
          <div>
            {/* {console.log("Inside accordian: ", viewCar)} */}
            {/* <Typography variant="subtitle1">VIN: {carData[0].vin}</Typography>
             <Typography variant="body2">Model:  {carData[0].model}</Typography> 
            <Typography variant="subtitle1">Number Plate:  {carData[0].number_plate}</Typography>
            {/* <Typography variant="subtitle1">CNIC: {carData[0]["vin"]}</Typography> */}  */}
          </div>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Complaint
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Complaint for lost car
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </Box>
        </Box>
      </Box>
  );
};

export default UserDashboard;