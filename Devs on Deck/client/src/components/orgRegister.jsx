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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ orgNameError:'', firstNameError:'', lastNameError:'', 
                                        emailError:'', passwordError:'', confirmError:''});
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const newOrganization={
            orgName,
            firstName,
            lastName,
            email,
            org,
            password
        }
        if(confirmPassword !== password){
          setErrors(prev =>({
              ...prev,
              ['confirmError']:'Password and confirm must much!'
          }))
          return;
      }
        axios.post("http://localhost:3001/api/orgRegister", newOrganization,{withCredentials:true})
        .then(res => {
            navigate('/orgs/dashboard');
        })
        .catch(err => {
          const error = err.response.data
            console.log(error)
            setErrors(prev => ({
                ...prev, ["emailError"]: error.email,
                ['passwordError']: error.password,
                ['LastNameError']: error.lastName,
                ['firstNameError']: error.firstName,
                ['orgNameError']: error.orgName
            }))
        })
    }
  return (
    <div>
    <div className="topnav">
      <Link className="active">DevsOnDeck</Link>
      <Link to={("/devs/login")} className="split">Dev Login</Link>
      <Link to={("/orgs/login")} className="split">Orgs Login</Link>
  </div>
        <h1>Organization Sign Up</h1>
            <h4 className='error'>{errors.orgNameError}</h4>
            <h4 className='error'>{errors.firstNameError}</h4>
            <h4 className='error'>{errors.lastNameError}</h4>
            <h4 className='error'>{errors.emailError}</h4>
            <h4 className='error'>{errors.passwordError}</h4>
            <h4 className='error'>{errors.confirmError}</h4>
            <form onSubmit={submitHandler}>
                <TextField label="Org Name" value={orgName} variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrgName(e.target.value)}}/><br/>
                <TextField label="First Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setFirstName(e.target.value)}}/><br/>
                <TextField label="Last Name" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setLastName(e.target.value)}}/><br/>
                <TextField label="Email" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <TextField label="Org Adress" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrg.orgAdress(e.target.value)}}/><br/>
                <TextField label="Org City" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrg.orgCity(e.target.value)}}/><br/>
                <TextField label="Org State" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setOrg.orgState(e.target.value)}}/><br/>
                <TextField label="Password" type='password' variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <TextField label="Confirm" type='password' variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br/>
                <Button variant='contained' color='success' sx={{m:1}} type="submit">Register</Button><br/><br/>
                <Link to={("/")}>Nee to Sign Up as a Developer?</Link>
            </form>
    </div>
  )
}

export default OrgRegister;