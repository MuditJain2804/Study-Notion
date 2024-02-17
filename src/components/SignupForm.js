import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confirmPassword:""
    })
    function changeHandler(event){
        setFormData( (prevData)=> ({
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }
    const studentButtonStyle =  {
        backgroundColor:accountType === "student" ?"#000814" : "rgba(0,0,0,0)",
        color:accountType === "student" ?"#F1F2FF" : "#999DAA",
        borderRadius:"20px",
    }
    const instructorButtonStyle =  {
        backgroundColor:accountType === "instructor" ?"#000814" : "rgba(0,0,0,0)",
        color:accountType === "instructor" ?"#F1F2FF" : "#999DAA",
        borderRadius:"20px",
    }
  return (
    <div>
        <ButtonGroup variant='standard' 
            style={{border:"2px solid #161D29", borderRadius:"20px", backgroundColor:"#161D29"}}>
            <Button 
                size='small' style={studentButtonStyle}
                onClick={() => setAccountType("student")} >
                Student
            </Button>
            <Button 
                size='small' style={instructorButtonStyle}
                onClick={() => setAccountType("instructor")}>
                Instructor
                </Button>
        </ButtonGroup>
        <Box className="box" component="form" onSubmit={submitHandler}>
            <div className='nameContainer'>
            <div>
                <label className='firstNameLabel'>First Name<sup style={{color:"#EF476F"}}>*</sup></label>
                <TextField required id='firstName' name='firstName'value={formData.firstName} type='text' size='small'
                    onChange={changeHandler} placeholder='Enter First Name'
                    style={{backgroundColor:"#161D29", width:"100%"}}
                />
            </div>
            <div>
                <label className='lastNameLabel'>Last Name<sup style={{color:"#EF476F"}}>*</sup></label>
                <TextField required id='lastName' name='lastName' value={formData.lastName} type='text' size='small'
                    onChange={changeHandler} placeholder='Enter Last Name'
                    style={{backgroundColor:"#161D29", width:"100%"}}
                />
            </div>
            </div>
            <div>
                <label className='emailLabel'>Email Address<sup style={{color:"#EF476F"}}>*</sup></label>
                <TextField required id='email' name='email' value={formData.email} type='email' size='small'
                onChange={changeHandler} placeholder='Enter Email Id'
                style={{backgroundColor:"#161D29", width:"100%"}}
            />
            </div>
            <div className='passwordContainer'>
                <FormControl variant='outlined'>
                    <label className='passwordLabel'>Create Password<sup style={{color:"#EF476F"}}>*</sup></label> 
                    <OutlinedInput required id='password' name='password' value={formData.password} 
                        type={showPassword ? ("text") : ("password")} onChange={changeHandler} 
                        placeholder='Create Password' size='small'
                        endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickShowPassword} edge="end" >
                            {showPassword ? <VisibilityOff style={{color:'#AFB2BF'}}/> : <Visibility style={{color:'#AFB2BF'}}/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    style={{backgroundColor:"#161D29", width:"100%"}}
                    />
                </FormControl>
                <FormControl variant='outlined'>
                    <label className='confirmPasswordLabel'>Confirm Password<sup style={{color:"#EF476F"}}>*</sup></label> 
                    <OutlinedInput required id='confirmPassword' name='confirmPassword'
                        value={formData.confirmPassword} 
                        type={showConfirmPassword ? ("text") : ("password")} onChange={changeHandler} 
                        placeholder='Confirm Password' size='small'
                        endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickShowConfirmPassword} edge="end" >
                            {showConfirmPassword ? <VisibilityOff style={{color:'#AFB2BF'}}/> : <Visibility style={{color:'#AFB2BF'}} />}
                            </IconButton>
                        </InputAdornment>
                    }
                    style={{backgroundColor:"#161D29", width:"100%"}}
                    />
                </FormControl>
            </div>
            <Button type='submit'
                style={{backgroundColor:"#FFD60A", fontSize:"medium", color:"#000814", marginTop:"10px"}}>
                Create Account
            </Button>
        </Box>
    </div>
  )
}

export default SignupForm