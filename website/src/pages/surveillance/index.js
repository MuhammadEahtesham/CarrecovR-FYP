import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import { tokens } from '../../theme';
import Header from "../../Components/Header";
import { Box } from '@mui/material';
import Paper from '@material-ui/core/Paper';
import Grid from "@mui/material/Grid";
import { styled  } from "@mui/material/styles";
import {  makeStyles  } from "@material-ui/styles";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { video } from '@material-ui/styles';

import videojs from "video.js";
import "video.js/dist/video-js.css";
import axios from 'axios';
//import styled from 'styled-components'

const StyledBox = styled(Grid)(({ theme }) => ({
  height: 300,
  width: 420,
}));

const useStyles = makeStyles({
  videoPlayer: {
    width: '100%',
    height: 'auto',
  },
});


// const VideoBg = styled.video`
//     width: 100%;
//     height: 650px;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: black;

// `
function Surveillance() {
  //   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);


const classes = useStyles();
const [VideoNumber, setVideoNumber] = useState('')

const handleButton = ()=>{
  console.log(VideoNumber)

  axios.post('http://localhost:8000/api/admin/vid_stored',{number:VideoNumber})
  .then(res=>{console.log(res.data)})
}

  return (
    <Box m="20px" >
       <Header title="Advanced Monitoring Solutions" subtitle="Swift Detection and Tracking" />

       <InputLabel id="demo-simple-select-standard-label">Select a Camera</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={VideoNumber} onChange={(e) => setVideoNumber(e.target.value)}
          label="Camera Number"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"camera-1"}>Cam 1</MenuItem>
          <MenuItem value={"camera-2"}>Cam 2</MenuItem>
          <MenuItem value={"camera-3"}>Cam 3</MenuItem>
        </Select>
      <div>
      <Button onClick={handleButton}variant="outlined" color="success">
        Select Camera
    </Button>
      <Grid container>

        <Grid item xs={12} sm={6}>
        Cam 1
          <StyledBox sx={{  }}>
          <video autoPlay  src="../../videos/video2.mp4" className={classes.videoPlayer}  />
          </StyledBox>
        
        </Grid>
        
        <Grid item xs={12} sm={6}>
        Cam 2
          <StyledBox sx={{  }}>
          <video autoPlay  src="../../videos/video3.mp4" className={classes.videoPlayer}  />
          </StyledBox>
        
        </Grid>
        
        <Grid item xs={6} sm={6}>
        Cam 3
          <StyledBox sx={{  }}>
          <video autoPlay  src="../../videos/video4.mp4" className={classes.videoPlayer}  />
          </StyledBox>

        </Grid>

        <Grid item xs={6} sm={6}>
        Cam 4
          <StyledBox sx={{  }}>
          <video autoPlay  src="../../videos/video4.mp4" className={classes.videoPlayer}  />
           </StyledBox>

        </Grid>

      </Grid>
      </div>
    </Box>
  );
}

export default Surveillance;

// const Surveillance = () => {

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px">
//       <Header title="SURVEILLANCE" subtitle="Watch for the stolen car to recover using cameras" />
//       <Box sx={{ backgroundColor: "red", height: 100, width: 100 }} />
//       <Box sx={{ backgroundColor: "green", height: 100, width: 100 }} />
//       <Box sx={{ backgroundColor: "blue", height: 100, width: 100 }} />
//       <Box sx={{ backgroundColor: "yellow", height: 100, width: 100 }} />
//     </Box>
//   )
// }

// export default Surveillance