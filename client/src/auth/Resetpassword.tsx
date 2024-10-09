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


const Resetpassword = () => {
  
  const [newPassword,setNewPassword] = useState<string>("");
const loading:boolean = true

  const changeEventHandler =(event: React.ChangeEvent<HTMLInputElement>):void => {
      setNewPassword(
       
       event.target.value
      )
  };


const loginSubmitHandler = async(event:React.FormEvent<HTMLFormElement>)=> {
  event.preventDefault();
//   const result = userLoginSchema.safeParse(input);
    // if(!result.success){
    //   const fieldErrors = result.error.formErrors.fieldErrors
    //   setErrors( fieldErrors as Partial<LoginInputState>)
    // }
  
  console.log(newPassword)
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
          Reset Password
        </Typography>     
        <Typography mb={2} variant="body1" component="span" sx={{ fontWeight: "light",fontSize:"12px" }} textAlign="center" gutterBottom>
          Please enter your new password
        </Typography>
        <TextField
        name="email"
        value={newPassword}
        onChange={changeEventHandler}
          size="medium"
          label="Password"
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




{/* {
            errors ? <>
            <Typography variant="body1" mb={1} sx={{color:"red"}}>{errors.password}</Typography>
             </>:null
        } */}


   {
    loading?<>
             <Button
             disabled
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
            <Typography sx={{ pl: 1 }}>Please Wait ...</Typography>
          </Box>
        </Button>
    
    
    </>:
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
           {/* <CircularProgress size={20} thickness={5} sx={{ color: "#676767" }} /> */}
           <Typography sx={{ pl: 1 }}> Reset </Typography>
         </Box>
       </Button>
   }

   

        <Divider sx={{ my: 1,height: 2,fontWeight:"light" }} /> {/* Thicker divider */}
        
        <Typography  textAlign="center" >
        <Link to="/login" >
        <Button variant="contained" fullWidth sx={{ textTransform: "none",color:"white" }}>
        Back to Login  
          </Button>
        </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Resetpassword;
