import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import './ecomheader.css'
function Ecomheader() {
    return (
        <div id='div'> 
             <Navbar  bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home">amazon.in</Navbar.Brand>
          <Nav  id='navbar' className="me-auto">
            <Nav.Link href="#home">location</Nav.Link>
            <Form className="d-flex" id='formSearch'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing"><Link to='/login'><Button variant="outline-info">Login</Button></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Ecomheader
