import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Card from 'react-bootstrap/Card';

const OrgDashboard = () => {
  const [developers, setDevelopers] = useState([]);
  const [refreshState, setRefreshState] = useState(false);
  const refresh = () => {
    setRefreshState(!refreshState)
  }
  useEffect(() => {
    axios.get("http://localhost:3001/api/developers")
      .then(res => {
        console.log(res.data)
        setDevelopers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [refreshState]);
  return (
    <div>
      <div className="topnav">
        <Link className="active">DevsOnDeck</Link>
        <Link to={("/orgs/login")} className="split">Log Out</Link>
      </div>
      <Link to={("/orgs/jobs/new")}>
        <Button variant='contained' color='info' >List a New Position</Button>
      </Link>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Header as="h3">Positions To Fill</Card.Header>
              <Card.Link href="#">position 1</Card.Link><br />
              <Card.Link href="#">position 2</Card.Link><br />
              <Card.Link href="#">position 3</Card.Link><br />
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Header as="h3">Available Devs</Card.Header>
            </Card.Body>
            {
              developers.map((developer, index) => {
                return (
                  <div class="card" style={{ width: '18rem' }} key={index}>
                    <div class="card-body">
                      <h5 class="card-title">{developer.firstName} {developer.lastName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{developer.skills}</h6>
                      <p class="card-text">{developer.bio}</p>
                    </div>
                  </div>
                )
              })
            }
          </Card>
        </div>
      </Stack>
    </div>
  )
}

export default OrgDashboard;