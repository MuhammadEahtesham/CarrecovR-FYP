import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Typography,
  TextField,
  Input ,
  Button,
  Stepper,
  FormLabel,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Header from "../../Components/Header";
import { useTheme } from "styled-components";
import { tokens } from "../../theme";
import axios from 'axios'
import { useOutletContext } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    color:'black',
    backgroundColor:'white'

  },
}));

function getSteps() {
  return [
   
    "Personal Details",
    "Vehicle Details",
    
  ];
}

function getStepContent(step, carData, fileChangeHandler, postUserData, userData) {
  const defEmail = userData.email
  switch (step) {
    case 0:
      return (
        <>
        <TextField
            
            id="email"
            defaultValue={defEmail}
            name="email"
            variant="outlined"
           value={defEmail}
           onBlur={postUserData}
           fullWidth
          
           InputProps={{
            style: {
              color: 'white',
            },
            placeholder: 'Email',
          }}

          />
          <TextField
            id="address"
            variant="outlined"
            fullWidth
            name="address"
            value = {carData.address}
            onChange={postUserData}
            InputProps={{
              style: {
                color: 'white',
              },
              placeholder: 'Address',
            }}
          />

         
          <TextField
            id="cnic"
            variant="outlined"
            fullWidth
            
            name="cnic"
            value = {carData.cnic}
            onChange={postUserData}
            InputProps={{
              style: {
                color: 'white',
              },
              placeholder: 'National ID',
            }}

          />
        </>
      );

    case 1:
      return (
        <>
          
          <TextField
            id="vin"
            variant="outlined"
            fullWidth

            name="vin"
            value = {carData.vin}
            onChange={postUserData}
            InputProps={{
              style: {
                color: 'white',
              },
              placeholder: 'VIN : Vehicle Identification Number',
            }}
          />
          <TextField
            id="model"
            variant="outlined"
            fullWidth
            
            name="model"
            value = {carData.model}
            onChange={postUserData}
            
            InputProps={{
              style: {
                color: 'white',
              },
              placeholder: 'Model',
            }}
          />

       <Box>
        <label htmlFor="file-input" className="file-input-label" >Upload Car Image</label>
        < input
                 type="file"
                 name="img"
                 id="file-input"
                 className='file-input'
                accept=".jpeg, .jpg, .png"
                 placeholder="Car Color"
                onChange={fileChangeHandler}
        />
        <IconButton color="primary" aria-label="upload picture" component="label" className="upload-button">
              <input hidden accept="image/*" type="file" />
                  <PhotoCamera className="upload-icon" />
        </IconButton>
       </Box>
        </>
      );
    default:
      return "unknown step";
  }
}

export function HandleSubmit(props){
//   props.onSubmit(true); // Call the onSubmit function passed in through props and pass in true as the argument
 }

const LinaerStepper = (props) => {
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);

  const steps = getSteps();
  
  const [carData, setCarData] = useState({
    vin: "",
    model: "",
    cnic: "",
    email: "",
    address: "",
    
  });
  const [selectedFile, setselectedFile] = useState(null)

   const fileChangeHandler= (e)=>{
    
    const value = e.target.files[0];
    setselectedFile(value);
    console.log(selectedFile);

   }

   const handleSubmit = (e)=>{
    //  e.preventDefault()

    const formData = new FormData()
    formData.append("img",selectedFile)
  
    formData.append("vin", carData.vin)
    formData.append("email", carData.email)
    formData.append("cnic", carData.cnic)
    formData.append("address", carData.address)
    formData.append("model", carData.model)


    console.log('==============formData======================');
    for (let [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
    console.log('====================================');

     axios.post('http://localhost:8000/api/carRegister',formData, {headers:{'content-type': 'multipart/form-data'}})
     .then((response) => {
       console.log(response.data)
      }
       )
       .catch((error)=>{console.log('====================================');
       console.log(error);
       console.log('====================================');})
       
  
};


// let name, value;
 const postUserData = (event) => {
   let name = event.target.name;
   let value = event.target.value;

   setCarData({ ...carData, [name]: value });
   console.log('==============carData======================');
   console.log("Car Data:",carData);
   console.log('====================================');
 };
  
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if(activeStep === steps.length - 1){
      handleSubmit()
    }
    // setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    // HandleSubmit()
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  

  
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center" style={{ color: 'white',marginTop: '70px' }}>
          Thank You
          
        </Typography>
      
      ) : (
        <>
          <form>{getStepContent(activeStep, carData, fileChangeHandler, postUserData, props.userData)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {/* {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )} */}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{ marginTop: '20px' }}

          >
            
            {activeStep === steps.length - 1 ?(
                "Finish"
            )
              :
              (
                "Next"
              )
            }

            {/* {activeStep === steps.length - 1 ? "Finish"; handleSubmit() : "Next"} */}
          </Button>
        </>
      )}
    </div>
  );
};

export function MainApp(){

  const userData = useOutletContext();

  const theme = useTheme();
  
    return (
        <>
          <Box p="4px" m="20px" >
          <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Header title="Vehicle Registration Made Easy" subtitle="Efficiently Register Your Car Information" style={{ marginLeft: '20px' }}/>

          </Box>

            <Paper component={Box} p={3} style={{ backgroundColor: "#212c42", width: 1000, height: 400, border: "4px solid black",marginLeft: "150px", boxShadow: "0 12px 4px rgba(0, 0, 0, 0.5" }}>
              <LinaerStepper userData={userData}/>
            </Paper>
          </Box>
        </>
      );
}
