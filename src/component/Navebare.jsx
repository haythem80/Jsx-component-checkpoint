import React from 'react'
import { Button, Container, Form, NavDropdown, Navbar } from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import './Navebare.css';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navebare = () => {
  return (
    <div className='nav' >
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="#" className='name' >
            Shopping 
            <HiShoppingCart id ="eshop"/> 
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
            <CiSearch  id="Ciserach"/>
            </Button>
          <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item id = "dropdown" href="#action/3.1">Electronics</NavDropdown.Item>
              <NavDropdown.Item id = "dropdown" href="#action/3.2">Fashion</NavDropdown.Item>
              <NavDropdown.Item id = "dropdown" href="#action/3.2">sport</NavDropdown.Item>
            </NavDropdown>
            <MdOutlineShoppingCart  id ="linecard"/>
            <h4> cart </h4>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navebare
