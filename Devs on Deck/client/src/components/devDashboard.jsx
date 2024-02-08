import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const DevDashboard = (props) => {
  const { id } = useParams();
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([])
  const Skills = [
    { name: 'Django' },
    { name: 'Flask' },
    { name: 'Rails' },
    { name: 'Spring' },
    { name: 'JAVASCRIPT' },
    { name: 'JAVA' },
    { name: 'C#' },
    { name: 'GO' },
    { name: 'PYTHON' }
  ];
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const devDetails = {
      skills,
      bio
    }
    axios.post("http://localhost:8000/api/addSkillsBio"+ id, devDetails, { withCredentials: true })
      .then(res => {
        console.log(res);
        navigate('/devs/skills/frameworks');
      })
      .catch(err => {
        const errorRes = err.response.data;
        console.log(errorRes)
      })
  }
  return (
    <div>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
        <Link to={("/devs/login")} className="split">Log Out</Link>
      </div>
      <h1>Add Your Skills</h1>
      <form onSubmit={submitHandler}>
        <Stack justifyContent="center" direction="row" spacing={2}>
          <div>
            <p>Pick Your Top 5 Languages</p>
            <div className="card flex justify-content-center">
              <MultiSelect value={skills} onChange={(e) => setSkills(e.value)} options={Skills}
                optionLabel="name" display="chip" placeholder="Select Your Skills" maxSelectedLabels={5} className="w-full md:w-20rem" />
            </div>
          </div>
          <div>
            <p>Short Bio</p>
            <textarea className='square' type="text" />
          </div>
        </Stack>
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Link to={("/devs/skills/frameworks")}>
            <Button variant='contained' color='warning' >Skip This Step</Button>
          </Link>
          <Button variant='contained' color='info' type="submit">Next Step: Frameworks & Libraries</Button>
        </Stack>
      </form>

    </div>
  )
}

export default DevDashboard;