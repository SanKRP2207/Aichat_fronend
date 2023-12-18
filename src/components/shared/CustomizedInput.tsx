import React from 'react'
import { TextField } from '@mui/material'
 
type props = {
    name: string;
    type: string;
    label: string;
}

const CustomizedInput = (props: props) => {
  return (
    <TextField 
    margin="normal"
    InputLabelProps={{ style: { color: "white"}}}
    name={props.name}
    label={props.label}
    type={props.type}
    InputProps={{ style: { width: "400", borderRadius: 10, fontSize: 20, color: "white"}}} 
    />
  )
}

export default CustomizedInput
