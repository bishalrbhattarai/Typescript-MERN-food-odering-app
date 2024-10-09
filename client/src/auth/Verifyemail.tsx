import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const VerifyEmail = () => {
  const [otp, setOtp] = useState<Array<string>>(["", "", "", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    // Update OTP state
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move focus to the next input if the current one is filled
    if (value.length === 1 && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }

    setOtp(newOtp);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h5" component="h2" sx={{fontWeight:"bold"}} textAlign="center" gutterBottom>
        Verify your Email
      </Typography>
      <Typography variant="h5" component="h5" sx={{}} textAlign="center" gutterBottom>
        Enter the 6 digit code to verify your email.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "400px", // Limit width for better responsiveness
        }}
      >
        {otp.map((digit, index) => (
          <TextField
            key={index}
            id={`otp-input-${index}`}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            inputProps={{
              maxLength: 1, // Limit to a single character
                borderRadius:"20px",
                style: { textAlign: "center", }, // Center align the text
            }}
            variant="outlined"
            size="medium"
            sx={{
                borderRadius:"20px",
              width: "60px", // Set a fixed width for each input
              height: "60px", // Set a fixed height for each input
            }}
          />
        ))}
      
      </Box>
      <Button sx={{mt:1,backgroundColor:"orange"}}  variant="contained" fullWidth>Verify</Button>
    </Box>
  );
};

export default VerifyEmail;
