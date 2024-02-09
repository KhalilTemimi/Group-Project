import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from 'axios'
const JobAvailability = () => {
  const location = useLocation()
  const { skills, position } = location.state
  console.log(skills)
  const [devs, setDevs] = useState(null)
  const fetchDevs = async () => {
    try {

      const res = await axios.post("http://localhost:3001/api/getDev", { skills: skills }, { withCredentials: true })
      setDevs(res.data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDevs()
  }, [])

  const displayResults = () => {
    if (!devs) return <h1>No Available Devs</h1>

    return (
      <>
        {
          devs.map((dev, idx) => (
            <div className="dev-container" key={idx}>
              <h1>{dev.firstName + " " + dev.lastName}</h1>
              <ul className="dev-list">
                {
                  dev.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                    ))
                }</ul>
            </div>
          ))
        }
      </>
    )
  }
  return (
    <div>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
        <Link to={("/orgs/login")} className="split">Log Out</Link>
      </div>
      <div className="title">
        <h1>
          {position}
        </h1>
      </div>

      <div>
        <div className="available">
          <h1>Available Devs</h1>
        </div>
        {displayResults()}
      </div>
    </div>
  )
}

export default JobAvailability;