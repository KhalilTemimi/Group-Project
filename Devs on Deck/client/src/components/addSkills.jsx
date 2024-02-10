<<<<<<< HEAD
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SkillsStep from "./SkillsStep"
import FrameworksStep from "./FrameworksStep"

const AddSkills = () => {
  const [skills, setSkills] = useState([])
  const [bio, setBio] = useState("")
  const [step, setStep] = useState('firstStep')

  const HandleClick = (skip, back) => {
    if (back) {
      setStep('firstStep')
      setSkills([])
      setBio('')
    } else {
      if (skip) {
        setSkills([])
        setBio('')
      }
      setStep('lastStep')
    }

  }
  const handleDisplay = () => {


    if (step === "firstStep") {
      return <SkillsStep
        skills={skills}
        setSkills={setSkills}
        setBio={setBio}
        HandleClick={HandleClick}
      />
    }

    return <FrameworksStep
      skills={skills}
      setSkills={setSkills}
      bio={bio}
      HandleClick={HandleClick}
    />

=======
import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const AddSkills = (props) => {
  const { id } = useParams();
  const [skills, setSkills] = useState();
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
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const newSkills = {
      skills
    }
    axios.patch("http://localhost:3001/api/addSkill/"+id, newSkills, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        navigate('/devs/dashboard');
      })
      .catch(err => {
        const errorRes = err.response.data.errors;
        console.log(errorRes)
      })
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
  }
  return (
    <div>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
<<<<<<< HEAD
        <Link to={("/devs/login")} className="split">Dev Login</Link>
        <Link to={("/orgs/login")} className="split">Orgs Login</Link>
      </div>
      <div>
        {handleDisplay()}
      </div>
=======
        <Link to={("/devs/login")} className="split">Log Out</Link>
      </div>
      <h1>Add Your Skills</h1>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <form onSubmit={submitHandler}>
          <div>
            <p>Pick Your Top 5 Frameworks Or Libraries</p>
            <div className="card flex justify-content-center">
              <MultiSelect value={skills} onChange={(e) => setSkills(e.value)} options={Skills}
                optionLabel="name" display="chip" placeholder="Select Your Skills" maxSelectedLabels={5} className="w-full md:w-20rem" />
            </div>

            <p>quotes</p>
            <p className='square'>SOME INSPIRATIONAL QUOTES OR INFORMATION ABOUT WHY IT IS IMPORTANT
              TO FINISH UP THE PROFILE. </p>
          </div>
          <Button type='submit' variant='contained' color='warning' >Complete Profile</Button>
        </form>
      </Stack>



>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
    </div>
  )
}

export default AddSkills