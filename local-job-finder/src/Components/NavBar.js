import React, { useState } from 'react';
import { Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../favicon.ico';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Col>
      <Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">{/*<img src={logo} />*/} JobDash </NavbarBrand>
        <Link to="/Login" style={{ marginRight: "20px" }} >Sign in</Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/About">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Request">Job Request</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Users">Employees</NavLink>
            </NavItem>
            {
              /*
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>*/}
          </Nav>
        </Collapse>
      </Navbar>


    </Col>
  );
}

export default NavBar
