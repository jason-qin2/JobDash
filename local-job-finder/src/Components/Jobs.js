import React, { useState } from 'react';
import { Jumbotron, Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';
import {
    Link
} from "react-router-dom";

function Landing() {

    return (
        <div>

            <Col>
                <Card>
                    <CardHeader>
                        Current Jobs
                </CardHeader>
                    <CardBody>
                        <Table>
                                <thead>
                                    <th>Job</th>
                                    <th>User</th>
                                    <th>location</th>
                                    <th>Hours</th>
                                    <th>Distance</th>
                                </thead>
                                <tbody>
                                    <tr><td scope='row'><Link to="JobView/1">Lawn Mowing</Link></td><td><Link to="/Userview/1">Joe Smith</Link></td><td>Mississauga</td><td>9AM to 5PM</td><td>2 km</td></tr>
                                    <tr><td scope='row'><Link to="JobView/2">Driveway Shoveling</Link></td><td><Link to="/Userview/2">Bob Lee</Link></td><td>Mississauga</td><td>9AM to 5PM</td><td>1.2 km</td></tr>
                                    <tr><td scope='row'><Link to="JobView/3">Pool Maintenance</Link></td><td><Link to="/Userview/3">Dan Jack</Link></td><td>Toronto</td><td>9AM to 5PM</td><td>19 km</td></tr>
                                    <tr><td scope='row'><Link to="JobView/4">Lawn Cleaning</Link></td><td><Link to="/Userview/4">Stella Yang</Link></td><td>Brampton</td><td>9AM to 5PM</td><td>6 km</td></tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>

        </div>
    );
}

export default Landing;

