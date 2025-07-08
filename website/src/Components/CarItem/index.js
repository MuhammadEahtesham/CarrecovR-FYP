import axios from 'axios';
import React from 'react'
import { Avatar, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CarItem = (props)=> {
    console.log("Inside car item:", props)
    const removeItem = (email) => {
      console.log("I am removed")
      axios.delete(`http://localhost:8000/api/cache_car_removed/${email}`, email)
          .then(res => console.log(res.data))
          .catch((error) => {
            alert(error.detail);
      
          });
    } 
  
    const allowHandler = async (carData) => {
      
      const formData = new FormData()
      formData.append("image",carData.image)
    
      formData.append("vin", carData.vin)
      formData.append("email", carData.email)
      formData.append("cnic", carData.cnic)
      formData.append("address", carData.address)
      formData.append("model", carData.model)
      formData.append("number_plate", carData.number_plate)
  
      console.log('==============formData======================');
      for (let [key, value] of formData) {
        console.log(`${key}: ${value}`)
      }
      console.log('====================================');    
      
      let res = await axios
          .post("http://127.0.0.1:8000/api/car_stored/", formData)
          .then((response) => {
            console.log(response);
            alert("Data stored")
            return response;
          })
          .catch((error) => {
            alert(error.detail);
      
          });
  
     removeItem(carData.email)
     return res
  
    }
  
    const notAllowHandler =  (email) => {
      removeItem(email) 
    }
    
    const getAvatarUrl = (car) => {
      console.log(car.image.data);
      if (car.image) {
        const base64Url = `data:image/jpeg;base64,${car.image.toString('base64')}`;
        return base64Url;
      }
      return '';
    };
    
      return (
          <>
            <TableRow>
              <TableCell>
                <Avatar alt={props.cars.name} src={getAvatarUrl(props.cars)} />
              </TableCell>
              <TableCell>{props.cars.vin}</TableCell>
              <TableCell>{props.cars.email}</TableCell>
              <TableCell><button onClick={() => allowHandler(props.cars)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>accept</button>
  </TableCell>
              <TableCell>                 <button onClick={() => notAllowHandler(props.cars.email)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>reject</button>
  </TableCell>
  
            </TableRow>
              {/* <p>
              <span style={{ fontWeight: 'bold, underline' }}>{props.cars.vin} :  </span>  <span style={{ fontWeight: 'bold, underline' }}>{props.cars.email} : </span> {props.cars.cnic}   <span style={{ fontWeight: 'bold, underline' }}>{props.cars.address} :  </span> 
                   <button onClick={() => allowHandler(props.cars)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>accept</button>
                   <button onClick={() => notAllowHandler(props.cars.email)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>reject</button>
  
              </p> */}
          </>
      )
  }
  
  

export default CarItem