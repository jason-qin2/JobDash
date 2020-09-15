import React, { useState } from 'react';
import { Jumbotron, Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';

function About() {

    return (
        <div>

            <Col>
                <Card >
                    <CardHeader>
                        About Us
                </CardHeader>
                    <CardBody>
                        <h2>Our mission at JobDash is to bring the jobs to you! </h2>
                        <p>There are many people out there (mainly teenagers) who are always looking for small jobs to do. Now, instead of having to go door to door, they can exclusively visit those who need their servies.
                        For people looking to get a job done, there are a variety of jobs posted from people in your communities. From mowing your lawn to shoveling your driveway, you can find the right person for any job!
                        For people looking to earn some quick cash and help out your neighbours, it is easier than ever to post your services and have people contact you directly to have a job completed. 
                        You can specify your exact services, times, and locations to find the most convenient and suitable jobs for you.
                        </p>
                    </CardBody>
                </Card>
            </Col>

        </div>
    );
}

export default About;

