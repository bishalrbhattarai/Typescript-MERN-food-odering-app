import { Box, TextField, Button, Typography, InputAdornment, CircularProgress, Divider } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CallIcon from '@mui/icons-material/Call';
import { SignupInputState, userSignupSchema } from "../schema/userSchema";

// interface SignupInputState{
//   email: string;
//   password: string;
//   fullName:string;
//   contact:string;
// }

// interface SignupInputWithAge extends SignupInputState{
//   age:number;
// }





const Signup = () => {
  
  const [input,setInput] = useState<SignupInputState>({
    email:"",
    password:"",
    fullName:"",
    contact:""
    
  });

  const [errors,setErrors] = useState<Partial<SignupInputState>>({});
  
  const changeEventHandler =(event: React.ChangeEvent<HTMLInputElement>):void => {
      setInput({
        ...input,
        [event.target.name]:event.target.value
      })
  };


const loginSubmitHandler = async(event:React.FormEvent<HTMLFormElement>)=> {
  event.preventDefault();
//   form validation with zod library
const result = userSignupSchema.safeParse(input)
if(!result.success){

    const fieldErrors = result.error.formErrors.fieldErrors
    setErrors(fieldErrors as Partial<SignupInputState>);
    return;
} 

//  api calling
console.log(input)
}

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        width: "100%",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        component="form"
        onSubmit={loginSubmitHandler}
        // onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 3,
          borderRadius: "8px",
          boxShadow: 1,
          backgroundColor: "white",
          width: "100%",
          maxWidth: "450px",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }} textAlign="center" gutterBottom>
          Sign up
        </Typography>


        <TextField
        name="fullName"
        value={input.fullName}
        onChange={changeEventHandler}
          size="medium"
          label="Full Name"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DriveFileRenameOutlineIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ mb: 2 }}
        />

        {
            errors ? <>
            <Typography variant="body1" mb={1} sx={{color:"red"}}>{errors.fullName}</Typography>
             </>:null
        }



        <TextField
        name="email"
        value={input.email}
        onChange={changeEventHandler}
          size="medium"
          label="Email"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ mb: 2 }}
        />
   {
            errors ? <>
            <Typography mb={1} variant="body1" sx={{color:"red"}}>{errors.email}</Typography>
             </>:null
        }


        <TextField
        name="password"
        value={input.password}
        onChange={changeEventHandler}
          size="medium"
          label="Password"
          type="password"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ mb: 2 }}
        />

{
            errors ? <>
            <Typography mb={1} variant="body1" sx={{color:"red"}}>{errors.password}</Typography>
             </>:null
        }



<TextField
        name="contact"
        value={input.contact}
        onChange={changeEventHandler}
          size="medium"
          label="Contact Number"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CallIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ mb: 2 }}
        />

{
            errors ? <>
            <Typography  variant="body1" sx={{color:"red"}}>{errors.contact}</Typography>
             </>:null
        }




        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            padding: 1,
            backgroundColor: 'darkorange',
            color: 'white',
            '&:hover': {
              backgroundColor: 'orange',
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-around", textTransform: "capitalize" }}>
            <CircularProgress size={20} thickness={5} sx={{ color: "#676767" }} />
            <Typography sx={{ pl: 1 }}>Sign up</Typography>
          </Box>
        </Button>

        <Divider sx={{ my: 2,height: 3,fontWeight:"light" }} /> {/* Thicker divider */}
        
        <Typography variant="body2" textAlign="center">
          Already Have an Account ? 
        </Typography>
        <Typography mt={1} textAlign="center" >
        <Link to="/login" >
        <Button variant="contained" fullWidth sx={{ textTransform: "none",color:"white" }}>
          Login 
          </Button>
        </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
