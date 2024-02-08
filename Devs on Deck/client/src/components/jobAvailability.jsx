import { useLocation } from "react-router-dom";

const JobAvailability = () => {
  const location = useLocation()
  const { skills } = location.state
  console.log(skills)
  return (
    <div></div>
  )
}

export default JobAvailability;