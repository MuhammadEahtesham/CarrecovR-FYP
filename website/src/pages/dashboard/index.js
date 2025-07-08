import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Header from '../../Components/Header'
import CarItem from '../../Components/CarItem'
import ComplainItem from '../../Components/ComplainItem'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import StatBox from '../../Components/StatBox';

import PersonIcon from "@mui/icons-material/Person";
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import axios from 'axios';
import { Avatar, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../dashboard/new.css'



const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [carData, setCarData] = useState([])
  const [complainData, setComplainData] = useState([])

  const getData = async ()=>{
   const res = await axios.get('http://localhost:8000/api/get_cache_cars/')
   
  setCarData(res.data)
  console.log(res.data)
  }
  
  const getComplainData = async ()=>{
    const res = await axios.get('http://localhost:8000/api/get_cache_complains/')
    
  setComplainData(res.data)
   console.log(res.data)
   }

  useEffect(()=>{
   
   getData()
  }, [])

  useEffect(()=>{
   
    getComplainData()
   
   }, [])
 
  
 useEffect(()=>{
  const url = "ws://localhost:8000/ws"
  const ws = new WebSocket(url);
  // ws.onopen = (event) => {
  //     ws.send("Connect");
  //   };
  
    ws.onmessage = (e) => {
      // const message = JSON.parse(e.data);
     // alert(e.data)
     console.log(e.data)
     if(e.data ==="User form recieved!"){

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
      // console.log(message);
      // setMessages([...messages, message]);
    };
 },[])

  return (
  <>
    <Box m="20px">
    <ToastContainer/>
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Management Console" subtitle="Insights and Controls at Your Fingertips"/>
    </Box>

    {/* GRID & CHARTS */}
    <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor='#212c42'
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="3px solid black" // Added border property
          boxShadow= "10px 20px 5px rgba(0, 0, 0, 0.2)"
        >
          <StatBox
            subtitle="User Enrollment"
            icon={
              <PersonIcon
                sx={{ color: 'white', fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='#212c42'
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="3px solid black"
          boxShadow= "10px 20px 5px rgba(0, 0, 0, 0.2)"

        >
          <StatBox
      
            subtitle="Complaints log"
            progress="0.50"
            
            icon={
              <PointOfSaleIcon
                sx={{ color: 'white', fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='#212c42'
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="3px solid black"
          boxShadow= "10px 20px 5px rgba(0, 0, 0, 0.2)"

        >
          <StatBox
            subtitle="Resolve Complains"
            progress="0.30"
           
            icon={
              <PersonAddIcon
                sx={{ color: 'white', fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='#212c42'
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="3px solid black"
          boxShadow= "10px 20px 5px rgba(0, 0, 0, 0.2)"

        >
          <StatBox
            subtitle="Complaints Pending"
            progress="0.80"
            // increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: 'white', fontSize: "30px" }}
              />
            }
          />
        </Box>
        </Box>
    </Box>

    <div>
      <h2>Registered Vehicles</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>VIN</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((car) => (
            <CarItem key={car.VIN} car={car} />
          ))}
        </tbody>
      </table>

      <h2>Complain Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>VIN</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complainData.map((complain) => (
            <ComplainItem key={complain.id} complain={complain} />
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default Dashboard