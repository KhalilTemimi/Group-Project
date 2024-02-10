import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const OrgLogin = () => {
<<<<<<< HEAD
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "", fields: "" });
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({emailError:'', passwordError:''});
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const organization = {
            email,
            password
        }
<<<<<<< HEAD
        axios.post("http://localhost:3001/api/orgLogin", organization, { withCredentials: true })
            .then(res => {
                navigate(`/orgs/dashboard/${res.data._id}`);
            })
            .catch(err => {
                const error = err.response.data
                setErrors(prev => ({
                    ...prev, email: error.email,
                    password: error.password,
                    fields: error.fields
                }))
            })
    }
    return (
        <div>
            <div className="topnav">
                <Link className="active">DevsOnDeck</Link>
                <Link to={("/")} className="split">Dev Registration</Link>
                <Link to={("/orgs/register")} className="split">Orgs Registration</Link>
            </div>
            <h1>Welcome Back!</h1>
            <h3>Let's find you Some Candidates!</h3>
            <h3 className='error'>{errors.email}</h3>
            <h3 className='error'>{errors.password}</h3>
            <h3 className='error'>{errors.fields}</h3>
            <form onSubmit={submitHandler}>

                <TextField label="Email" variant='outlined' sx={{ m: 1, width: 500 }} onChange={(e) => { setEmail(e.target.value) }} /><br />
                <TextField label="Password" variant='outlined' sx={{ m: 1, width: 500 }} onChange={(e) => { setPassword(e.target.value) }} /><br />
                <Button variant='contained' color='success' sx={{ m: 1 }} type="submit">Log In</Button><br /><br />
=======
        axios.post("http://localhost:3001/api/orgLogIn", organization,{withCredentials:true})
        .then(res => {
            console.log(res.data);
            navigate('/orgs/dashboard');
        })
        .catch(err => {
            const error = err.response.data
            console.log(error)
            setErrors(prev => ({
                ...prev, ["emailError"]: error.email,
                ['passwordError']: error.password
            }))
        })
    }
  return (
    <div>
    <div className="topnav">
      <Link className="active">DevsOnDeck</Link>
      <Link to={("/")} className="split">Dev Registration</Link>
      <Link to={("/orgs/register")} className="split">Orgs Registration</Link>
  </div>
        <h1>Welcome Back!</h1>
        <h3>Let's find you Some Candidates!</h3>
            <h4 className='error'>{errors.emailError}</h4>
            <h4 className='error'>{errors.passwordError}</h4>
            <form onSubmit={submitHandler}>
            
                <TextField label="Email" variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <TextField label="Password" type='password' variant='outlined' sx={{m:1, width:500}} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <Button variant='contained' color='success' sx={{m:1}} type="submit">Log In</Button><br/><br/>
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
            </form>
        </div>
    )
}

export default OrgLogin;