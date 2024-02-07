import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const AddPosition = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const allSkills = ['HTML', 'CSS', 'RUBY', 'PYTHON', 'SQL', 'JAVASCRIPT', 'JAVA',
    'C#', 'GO', 'Django', 'Flask', 'Rails', 'Spring']
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSkills(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newPosition = {
      name,
      description,
      skills
    }
    axios.post("http://localhost:8000/api/addPosition", newPosition,{withCredentials:true})
      .then(res => {
        console.log(res.data);
        navigate('/orgs/dashboard');
      })
      .catch(err => {
        const errorRes = err.response.data.errors;
        console.log(errorRes)
        const errArr=[];
        for (const key of Object.keys(errorRes)){
            console.log(errorRes[key].message)
            errArr.push(errorRes[key].message)
        }
        setErrors(errArr);
      })
  }
  return (
    <div>
      <div className="topnav">
      <Link className="active">DevsOnDeck</Link>
      <Link to={("/orgs/login")} className="split">Log Out</Link>
    </div>
      <h1>Add A position</h1>
      {
        errors.map((err, index) => {
          return (
            <p key={index} style={{ color: "red" }} >{err}</p>
          )
        })
      }
      <FormControl onSubmit={submitHandler}>
        <TextField label="Name" variant='outlined' sx={{m:2}} onChange={(e) => { setName(e.target.value) }} /><br />
        <TextField label="Description" variant='outlined' sx={{m:2}} onChange={(e) => { setDescription(e.target.value) }} /><br />
        <InputLabel shrink htmlFor="select-multiple-native">
          Skills
        </InputLabel>
        <Select
          multiple
          native
          value={skills}
          onChange={handleChangeMultiple}
          label="Skills"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {allSkills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </Select><br />
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Link to={("/orgs/dashboard")}>
            <Button variant='contained' color='warning' >Cancel</Button>
          </Link>
          <Button variant='contained' color='success' type="submit">Add Position</Button>
        </Stack>
      </FormControl>
    </div>
  )
}

export default AddPosition