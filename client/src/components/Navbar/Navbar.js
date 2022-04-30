import React,{useEffect,useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Navbar.css'
import Logo from './Sections/Logo';
import RightSide from './Sections/RightSide';
import Toggle from './Sections/Toggle';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { textAlign } from '@mui/system';

function Navbar(props) {

    
    const fontStyle = { 
        fontSize:'15px',
        marginRight:"50px",
    }

    const [toggle,setToggle] =  useState(true)
    
    if(toggle){
        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar style={{backgroundColor:'#A47C6D'}} position="static">

                    <Toolbar>
                
                        <Logo/>
                        <RightSide/>
                        <Toggle/>
                        
                    </Toolbar>

                </AppBar>
            </Box>
        )
    }
}

export default Navbar