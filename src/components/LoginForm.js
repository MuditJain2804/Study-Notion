import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"", password:""
    })
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    function changeHandler(event){
        setFormData( ( prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }
  return (
    <div >
        <Box className="box" component="form" onSubmit={submitHandler} >
            <div>
                <label className='emailLabel'>Email Address<sup style={{color:"#EF476F"}}>*</sup></label>
                <TextField required id='email' name='email' value={formData.email} type='email'
                    onChange={changeHandler} placeholder='Enter email address'
                    style={{backgroundColor:"#161D29", width:"100%"}}
                />
            </div>
            <FormControl variant='outlined'>
                <label className='passwordLabel'>Password<sup style={{color:"#EF476F"}}>*</sup></label>
                <OutlinedInput required id='password' name='password' value={formData.password} placeholder='Password' 
                    type={showPassword ? "text" : "password"} onChange={changeHandler}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickShowPassword} edge="end" >
                            {showPassword ? <VisibilityOff style={{color:'#AFB2BF'}}  /> : <Visibility style={{color:'#AFB2BF'}} />}
                            </IconButton>
                        </InputAdornment>
                    }
                    style={{backgroundColor:"#161D29", width:"100%"}}
                />
                <Link to="#">
                    <p className='forgotPassword'>
                        Forgot Password
                    </p>
                </Link>
            </FormControl>
            <Button type='submit' 
                style={{backgroundColor:"#FFD60A", fontSize:"medium", color:"#000814"}}>
                Sign In
            </Button>
        </Box>
    </div>
  )
}

export default LoginForm