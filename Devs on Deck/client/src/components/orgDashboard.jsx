import React from 'react'
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const OrgDashboard = () => {
  return (
    <div>
      <div class="topnav">
        <Link class="active">DevsOnDeck</Link>
        <Link to={("/orgs/login")} class="split">Log Out</Link>
      </div>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <div>
          <Link to={("/orgs/jobs/new")}>
            <Button variant='contained' color='info' >List a New Position</Button>
          </Link>
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
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Dev 1</ListGroup.Item>
              <ListGroup.Item>Dev 2</ListGroup.Item>
              <ListGroup.Item>Dev 3</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Stack>
    </div>
  )
}

export default OrgDashboard;