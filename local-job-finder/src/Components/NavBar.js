import React, {useState} from 'react';
import {Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table} from 'reactstrap';

function NavBar() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Col>
        <Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">Local Job Finder</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/About/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Jobs/">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Request/">Job Request</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Employees/">Employees</NavLink>
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
