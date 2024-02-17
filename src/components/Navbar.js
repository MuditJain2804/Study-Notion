import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import {toast} from 'react-toastify';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='navbar' >
        <Box>
            <AppBar position='static' style={{backgroundColor:"#000814"}}>
                <Toolbar>
                    <Link to="/">
                        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
                    </Link>
                    <ul style={{display:"flex", gap:"40px", listStyle:"none", marginLeft:"200px"}}>
                        <li>
                            <Link to="/" className='list' >Home</Link>
                        </li>
                        <li>
                            <Link to="/" className='list' >About</Link>
                        </li>
                        <li >
                            <Link to="/" className='list' >Contact</Link>
                        </li>
                    </ul>
                    <div style={{marginLeft:"200px",gap:"20px", display:"flex", justifyItems:"center"}}>
                        { !isLoggedIn&&
                            <Link to="/login">
                                <Button 
                                    style={{backgroundColor:"#161D29", color:"#AFB2BF",borderColor:"#2C333F",borderRadius:"5px"}}>
                                    Login
                                </Button>
                            </Link>
                        }
                        { !isLoggedIn&&
                            <Link to="/signup">
                                <Button style={{backgroundColor:"#161D29", color:"#AFB2BF",borderColor:"#2C333F",borderRadius:"5px"}}>
                                    Signup
                                </Button>
                            </Link>
                        }
                        { isLoggedIn&&
                            <Link to="/">
                                <Button onClick={() => {
                                    setIsLoggedIn(false);
                                    toast.success("Logged Out");
                                }} style={{backgroundColor:"#161D29", color:"#AFB2BF",borderColor:"#2C333F",borderRadius:"5px",width:"100px"}} >
                                    Log Out
                                </Button>
                            </Link>
                        }    
                        { isLoggedIn&&
                            <Link to="/dashboard">
                                <Button style={{backgroundColor:"#161D29", color:"#AFB2BF",borderColor:"#2C333F",borderRadius:"5px"}}>
                                    Dashboard
                                </Button>
                            </Link>
                        }  
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar;