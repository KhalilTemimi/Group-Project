import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const DevDashboard = () => {
  const [skills, setSkills] = useState([])
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const skills = {
      skills
    }
    axios.post("http://localhost:8000/api/addSkills", skills)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(err => {
        const errorRes = err.response.data.errors;
        console.log(errorRes)
        const errArr = [];
        for (const key of Object.keys(errorRes)) {
          console.log(errorRes[key].message)
          errArr.push(errorRes[key].message)
        }
        setErrors(errArr);
      })
  }
  return (
    <div>
      <div class="topnav">
        <Link class="active">DevsOnDeck</Link>
        <Link to={("/devs/login")} class="split">Log Out</Link>
      </div>
      <h1>Add Your Skills</h1>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <div>
          <p>Pick Your Top 5 Languages</p>
          <form onSubmit={submitHandler}>
            <select className='square' name="skills" id="skills" multiple value={skills}
              onChange={(e) => { setSkills(e.target.value) }}>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="RUBY">PYTHON</option>
              <option value="SQL">SQL</option>
              <option value="JAVASCRIPT">JAVASCRIPT</option>
              <option value="JAVA">JAVA</option>
              <option value="C#">C#</option>
              <option value="GO">GO</option>
              <option value="TYPESCRIPT">TYPESCRYPT</option>
            </select>
            <br /><br />
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <div>
          <p>Short Bio</p>
          <textarea className='square' type="text" />
        </div>
      </Stack>
      <p>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</p>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <Link to={("/devs/skills/frameworks")}>
          <Button variant='contained' color='warning' >Skip This Step</Button>
        </Link>
        <Link to={("/devs/skills/frameworks")}>
          <Button variant='contained' color='info' type="submit">Next Step: Frameworks & Libraries</Button>
        </Link>
      </Stack>

    </div>
  )
}

export default DevDashboard;