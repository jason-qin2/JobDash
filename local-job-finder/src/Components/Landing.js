import React, { useState } from 'react';
import { Jumbotron, Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';

function Landing() {

    return (
        <div>

            <Jumbotron>
                <h1 className="display-3">Welcome to the solution to all the jobs you need completed!</h1>
                <p className="lead">Have you ever wanted your lawn mowed, or your driveway to be plowed but you don't want to do it yourself? Well here's the solution: Instead of hiring expensive companies to do the work for you, why not support your local communities and have someone qualified do it for you.</p>
                <hr className="my-2" />
                <p>We are excited to bring you the right people for the job.</p>
                <p className="lead">
                    <Button color="primary" href="/About">Learn More</Button>
                </p>
            </Jumbotron>

            <Col>
                <Card style={{width:"400px"}}>
                    <CardHeader>
                        Current Stats
                </CardHeader>
                    <CardBody>
                        <Table>
                            <tbody>
                                <Col>
                                    <tr><th scope='row'>No. Jobs being Offered</th><td>2</td></tr>
                                    <tr><th scope='row'>No. Successful Jobs Completed</th><td>2</td></tr>
                                    <tr><th scope='row'>No. Total Job-seekers</th><td>2</td></tr>
                                </Col>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>

        </div>
    );
}

export default Landing;

