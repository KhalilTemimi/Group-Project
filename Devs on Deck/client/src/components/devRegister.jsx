import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const DevRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [Password, setPassword] = useState("");
  const [cofirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const newDeveloper={
            firstName,
            lastName,
            email,
            city,
            Password
        }
        axios.post("http://localhost:8000/api/register", newDeveloper)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(err => {
            console.log(err.response.data.errors.name.message);
            const errArr = [];
            errArr.push(err.response.data.errors.name.message);
            setErrors(errArr);
        })
    }
  return (
  <div>
    <div class="topnav">
      <Link class="active">DevsOnDeck</Link>
      <Link to={("/devs/login")} class="split">Dev Login</Link>
      <Link to={("/orgs/login")} class="split">Orgs Login</Link>
  </div>
        <h1>Developer Sign Up</h1>
            {
                errors.map((err, index)=>{
                    return(
                        <p key={index} style={{color:"red"}} >{err}</p>
                    )
                })
            }
            <form onSubmit={submitHandler}>
                <TextField label="First Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setFirstName(e.target.value)}}/><br/>
                <TextField label="Last Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setLastName(e.target.value)}}/><br/>
                <TextField label="Email" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <TextField label="City" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setCity(e.target.value)}}/><br/>
                <TextField label="Password" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <TextField label="Confirm" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br/>
                <Button variant='contained' color='success' sx={{m:1}} type="submit">Register</Button><br/><br/>
                <Link to={("/orgs/register")}>Nee to Sign Up an Organization?</Link>
            </form>
    </div>
  )
 
}

export default DevRegister;