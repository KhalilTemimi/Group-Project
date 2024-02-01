import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const OrgRegister = () => {
  const [orgName, setOrgName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState({

    orgCity:"",
    orgAdress:"",
    orgState:""
  });
  const [Password, setPassword] = useState("");
  const [cofirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const newOrganization={
            orgName,
            firstName,
            lastName,
            email,
            org,
            Password
        }
        axios.post("http://localhost:8000/api/register", newOrganization)
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
        <h1>Organization Sign Up</h1>
            {
                errors.map((err, index)=>{
                    return(
                        <p key={index} style={{color:"red"}} >{err}</p>
                    )
                })
            }
            <form onSubmit={submitHandler}>
            <TextField label="Org Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrgName(e.target.value)}}/><br/>
                <TextField label="First Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setFirstName(e.target.value)}}/><br/>
                <TextField label="Last Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setLastName(e.target.value)}}/><br/>
                <TextField label="Email" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <TextField label="Org Adress" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrg.orgAdress(e.target.value)}}/><br/>
                <TextField label="Org City" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrg.orgCity(e.target.value)}}/><br/>
                <TextField label="Org State" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrg.orgState(e.target.value)}}/><br/>
                <TextField label="Password" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <TextField label="Confirm" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br/>
                <Button variant='contained' color='success' sx={{m:1}} type="submit">Register</Button><br/><br/>
                <Link to={("/")}>Nee to Sign Up as a Developer?</Link>
            </form>
    </div>
  )
}

export default OrgRegister;