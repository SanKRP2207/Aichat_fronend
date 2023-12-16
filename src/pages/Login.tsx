import {Box} from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={-5} display={{md: "flex", sm: "none", xs: "none"}}>
        <img src="roboti.png" alt="roboti" style={{width: "400px", height: "500px" }}/>
      </Box>
      
    </Box>
  )
}

export default Login
