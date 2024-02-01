import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const DevLogin = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const developer={
            email,
            Password
        }
        axios.post("http://localhost:8000/api/logIn", developer)
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
      <Link to={("/")} class="split">Dev Registration</Link>
      <Link to={("/orgs/register")} class="split">Orgs Registration</Link>
  </div>
        <h1>Welcome Back, Developer!</h1>
        <h3>Let's connect You To A Job!</h3>
            {
                errors.map((err, index)=>{
                    return(
                        <p key={index} style={{color:"red"}} >{err}</p>
                    )
                })
            }
            <form onSubmit={submitHandler}>
            
                <TextField label="Email" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <TextField label="Password" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <Button variant='contained' color='success' sx={{m:1}} type="submit">Log In</Button><br/><br/>
            </form>
    </div>
  )
}

export default DevLogin;