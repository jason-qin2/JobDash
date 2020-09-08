import React, { useState } from 'react';
import { Jumbotron, Row, Col, Button, Link, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table, Input } from 'reactstrap';

class Login extends React.Component {

    render() {
        return (
            <div>
                <Col>
                    <Card style={{ width: "50%", marginLeft: "25%", marginTop:"3%" }}>
                        <CardHeader>
                            Register
                    </CardHeader>
                        <CardBody>
                            <Table>
                                <tbody>
                                    <Col>
                                        <tr><th scope='row'>First Name</th><td><Input /></td></tr>
                                        <tr><th scope='row'>Last Name</th><td><Input /></td></tr>
                                        <tr><th scope='row'>Username</th><td><Input /></td></tr>
                                        <tr><th scope='row'>Password</th><td><Input /></td></tr>
                                        <tr><th scope='row'>Confirm Password</th><td><Input /></td></tr>
                                    </Col>
                                </tbody>
                            </Table>
                        </CardBody>
                        <CardFooter>
                            <Button>Create Account</Button>
                        </CardFooter>
                    </Card>
                </Col>
    
            </div>
        );
    }
    
}

export default Login;

