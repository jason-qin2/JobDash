import React, {useState} from 'react';
import {Jumbotron, Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table} from 'reactstrap';

function Landing() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Col>
        <Jumbotron>
        <h1 className="display-3">Welcome to the fix for all your personal jobs!</h1>
        <p className="lead">Have you ever wanted your lawn mowed, or your driveway to be plowed but you don't want to do it your self? Well here's the solution. Instead of hiring expensive companies to do the work for you, why not support your local communities and have them do it for you.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary" href="/About/">Learn More</Button>
        </p>
      </Jumbotron>
        </Col>
        
    );
}

export default Landing;

