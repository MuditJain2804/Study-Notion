import React from 'react';
import Button from '@mui/material/Button';
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='container'>
        <div style={{width:"400px", marginRight:"200px"}}>
            <h1 className='heading'>{title}</h1>

            <p className='description'>
                <span className='descripton-1'>{desc1}</span>
                <br/>
                <span className='descripton-2'>{desc2}</span>
            </p>

            {formtype === "signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='lineContainer'>
                <div className='line'></div>
                <p className='or'>OR</p>
                <div className='line'></div>
            </div>
            <Button 
                style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", 
                borderRadius:"8px", fontSize:"medium", color:"#AFB2BF", border:"1px solid #2C333F", gap:"8px"}}>
                <FcGoogle/>
                Sign in with Google
            </Button>
        </div>
        <div className='image'>
            <img src={frameImage}
            alt='Pattern'
            width={358}
            height={310}
            loading='lazy'
            className='image1'
            />
            <img src={image}
            alt='Students'
            width={358}
            height={298}
            loading='lazy'
            className='image2'
            />
        </div>
    </div>
  )
}

export default Template