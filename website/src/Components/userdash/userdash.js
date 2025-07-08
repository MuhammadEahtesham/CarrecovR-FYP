import { useState, React, useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider  } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

import UserTopbar from "../../Components/userTopbar";
import UserSidebar from "../../Components/userSidebar";
import "../../Components/admindash/admindash.css"

import jwt_decode from 'jwt-decode'
import axios from "axios";


function Index() {
  const [theme, colorMode] = useMode();

  const navigate = useNavigate()


  // const [email, setEmail] = useState('')
   const [userData, setUserData] = useState([])

   const getData = async ()=>{
    // console.log("EMail: ", email)

  // await axios.get('http://localhost:8000/api/get_one_user/'+ email)
  //   .then(res=>{setUserData(res.data); console.log("Insideuser: ",res.data)})
  //   .catch(err=>{console.log("Err: ", err.data)})
    // console.log("Email:",email)
    //  await axios({
    //   url:'http://localhost:8000/api/get_one_user' ,
    //   method: "GET",
    //   body:{email: email}
    //   }).then(res => setUserData(res.data))
    //   .catch(err=>console.log(err.message))

    // axios.get('http://localhost:8000/api/get_one_user?', {
    //   params: {
    //     email: email
    //   }
    // })
    // .then(res => {
    //   console.log(res.data);
    //   setUserData(res.data)
    // })
    // .catch(err => {
    //   console.log(err.message);
    // });

  await axios.get('http://localhost:8000/api/get_one_user/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user-token')}`
        }
      })
      .then(response => {
        setUserData(response.data);
        console.log(response.data.username)
      })
       .catch(error => {
            alert(error.response.data.detail)
            localStorage.removeItem('user-token')
            navigate('/')
      //   // setError(error.response.data.detail);
       });

    }

  useEffect(()=>{

//   const token = localStorage.getItem('user-token')
//   const user = jwt_decode(token)
//   const user_email = user.data.email
//   setEmail(user_email)

//   if(!user){
//    localStorage.removeItem('user-token')
//    navigate('/')
//  }

    getData()
  }, [])


  return (
 <>
   <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
       <CssBaseline />
        <div className="app">
          <UserSidebar user = {userData}/>
          <main className="content">
            <UserTopbar user = {userData} />

            <Outlet context={userData}  />

          </main>
        </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
 </>

  );
}

export default Index;
