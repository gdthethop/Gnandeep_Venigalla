import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaReact } from 'react-icons/fa';
// import JavascriptIcon from '@mui/icons-material/Javascript';

export default function DenseAppBar({ isHidden }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: isHidden ? 'none' : 'flex', 
        backgroundColor: "#fff6e9", 
        color:'#41356C',
        justifyContent:'center',
        alignItems:'center',}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, textAlign:'center', fontWeight:600, fontSize: { xs: '11px', sm: '14px' } }}>
            This website is made with React<FaReact color="#41356C" size={9} sx={{fontWeight:900}}/>. &copy; 2024-2029 by Gnandeep Venigalla.
          </Typography>
          {/* <JavascriptIcon style={{color:'#41356C', marginTop:'10px',marginLeft:'1px', fontSize:'26px'}}/> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
