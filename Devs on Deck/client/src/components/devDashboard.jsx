<<<<<<< HEAD
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
const DevDashboard = () => {
  const { id } = useParams()
  const [dev, setDev] = useState(null)
  const [error, setError] = useState(null)


  const getDev = async () => {
    try {
      const dev = await axios.get(`http://localhost:3001/api/getOneDev/${id}`, { withCredentials: true })
      setDev(dev.data)
    } catch (err) {
      setError(true)
    }
=======
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
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
  }
  useEffect(() => {
    getDev()
  }, [])

  if (!dev && !error) {
    return <>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
        <Link to={("/devs/login")} className="split">Dev Login</Link>
        <Link to={("/orgs/login")} className="split">Orgs Login</Link>
      </div>
<<<<<<< HEAD
      <h1 className='mt-40'>Fetching user Data ...</h1>
    </>
  }
=======
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
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785

  if (error) {
    return <>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
        <Link to={("/devs/login")} className="split">Dev Login</Link>
        <Link to={("/orgs/login")} className="split">Orgs Login</Link>
      </div>
      <h1 className='mt-40'>User Does Not Exist !</h1>

    </>
  }
  return (
    <>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
        <Link to={("/devs/login")} className="split">Dev Login</Link>
        <Link to={("/orgs/login")} className="split">Orgs Login</Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-20 mt-40">
        <h1 className="text-4xl font-bold">Hello, {dev.firstName + " " + dev.lastName} !</h1>
        <div className="flex items-center justify-center gap-x-4">
          <h3 className="text-2xl">
            Click here to update or add new skills
          </h3>

          <Link to={`/devs/skills/${id}`} className="text-lg font-semibold border-2
         border-black px-2 py-1 hover:bg-black hover:text-white
         transition-all duration-300
         ">
            Update Skills
          </Link>
        </div>
      </div>
    </>
  )
}

export default DevDashboard