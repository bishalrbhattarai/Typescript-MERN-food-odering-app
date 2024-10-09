import { Box, TextField, Button, Typography, InputAdornment, CircularProgress, Divider } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { LoginInputState, userLoginSchema } from "../schema/userSchema";

// interface LoginInputState{
//   email: string;
//   password:string;
// }

// interface LoginInputWithAge extends LoginInputState{
//   age:number;
// }


const Login = () => {
  
  const [input,setInput] = useState<LoginInputState>({
    email:"",
    password:""
  });
    const [errors,setErrors] = useState<Partial<LoginInputState>>({})


  const changeEventHandler =(event: React.ChangeEvent<HTMLInputElement>):void => {
      setInput({
        ...input,
        [event.target.name]:event.target.value
      })
  };


const loginSubmitHandler = async(event:React.FormEvent<HTMLFormElement>)=> {
  event.preventDefault();
  const result = userLoginSchema.safeParse(input);
    if(!result.success){
      const fieldErrors = result.error.formErrors.fieldErrors
      setErrors( fieldErrors as Partial<LoginInputState>)
    }
  
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
          boxShadow: 3,
          backgroundColor: "white",
          width: "100%",
          maxWidth: "450px",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }} textAlign="center" gutterBottom>
          Login
        </Typography>
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
            <Typography variant="body1" mb={1} sx={{color:"red"}}>{errors.email}</Typography>
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
            <Typography variant="body1" mb={1} sx={{color:"red"}}>{errors.password}</Typography>
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
            <Typography sx={{ pl: 1 }}>Login</Typography>
          </Box>
        </Button>

       

        <Divider sx={{ my: 2,height: 2,fontWeight:"light",backgroundColor:"smokewhite" }} /> {/* Thicker divider */}
        
        <Typography mt={1} mb={1} textAlign="center" >
        <Link to="/forgotpassword" >
        <Button variant="contained" fullWidth sx={{ backgroundColor:"#E23F44ed", textTransform: "none",color:"white" }}>
          Forgot Password ?  
          </Button>
        </Link>
        </Typography>

        <Typography variant="body2" textAlign="center">
          Don't Have an Account ? 
        </Typography>
        <Typography mt={1} textAlign="center" >
        <Link to="/signup" >
        <Button variant="contained" fullWidth sx={{ textTransform: "none",color:"white" }}>
          Sign up  
          </Button>
        </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
