import React, {useState} from "react";
import {Box, Typography, Grid, Paper} from '@mui/material';
import { grey } from "@mui/material/colors";

function App() {

  const [status, setStatus] = useState('status bar');

  const changeStatus=(i)=>{
    setStatus(i);
  }
  return (
   <Box
   display="flex"
   justifyContent="center"
   alignItems="center"
   minHeight="100vh"
   bgcolor="grey"
   >
    <Box
    width={280}
    height={520}
    borderRadius={4}
    bgcolor='white'
    overflow={"hidden"}
    display="flex"
    justifyContent="center"
    alignItems="center"
    p={2}
    boxShadow={3}
    border='2px solid black'
    >
      <Box
    width='100%'
    height='80%'
    bgcolor='blue'
    overflow={"hidden"}
    >
      <Box 
          mb={2} 
          p={1} 
          border="1px dashed #90caf9" 
          textAlign="center"
          margin='1px 1px 1px 1px'
        >
          <Typography variant="body2" color="white">
            {status}
          </Typography>
        </Box>
        <Grid container spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop='20%'
        >
          {Array.from({ length: 20 }, (_, i) => (
            <Grid item xs={3} key={i} onClick={()=>changeStatus(i+1)}>
              <Paper 
                elevation={3} 
                sx={{ 
                  width:15,
                  padding: 1.5, 
                  textAlign: 'center', 
                  borderRadius: 2, 
                  fontWeight: 'bold', 
                  fontSize: '1rem' 
                }}
              >
                {i + 1}
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Box>
    </Box>
   </Box>
  );
}

export default App;
