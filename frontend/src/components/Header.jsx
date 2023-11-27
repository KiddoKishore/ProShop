import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {FaShoppingCart,FaUser} from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <LinkContainer to='/'>
                <Navbar.Brand>
                  <img src={logo} alt="ProShop"/>
                  ProShop</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                      <LinkContainer to='/card'>
                        <Nav.Link><FaShoppingCart />Cart</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/login'>
                        <Nav.Link><FaUser />Sign In</Nav.Link>
                      </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                
        </Navbar>
    </div>
  )
}

export default Header