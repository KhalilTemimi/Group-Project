import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
const JobAvailability = () => {
  const location = useLocation()
  const { skills, position } = location.state
  const [devs, setDevs] = useState(null)
  const fetchDevs = () => {
    //fetch for developers
  }

  useEffect(() => {
    fetchDevs()
  }, [])
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
      </div>
    </div>
  )
}

export default JobAvailability;