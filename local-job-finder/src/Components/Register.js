import React, { useState } from 'react';
import { Jumbotron, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Link, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table, Input } from 'reactstrap';

function Register() {
    const [modal, setModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);

    const createAccount = () => {
        if (password == cPassword) {
            console.log("Account created");
            setPasswordMatch(true);
            setModal(true);
        } else {
            console.log("passwords dont match");
            setPasswordMatch(false);
        }
    }

    const handleFirstName = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        console.log(e.target.value);
        setLastName(e.target.value);
    }

    const handleUsername = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    }

    const handlePassword= (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        if (e.target.value == cPassword) {
            console.log("passwords match");
            setPasswordMatch(true);
        } else {
            console.log("passwords dont match");
            setPasswordMatch(false);
        }
    }

    const handleCPassword = (e) => {
        console.log(e.target.value);
        setCPassword(e.target.value);
        if (password == e.target.value) {
            console.log("passwords match");
            setPasswordMatch(true);
        } else {
            console.log("passwords dont match");
            setPasswordMatch(false);
        }
    }

    return (
        <div>
            <Col>
                <Card style={{ width: "50%", marginLeft: "25%", marginTop: "3%" }}>
                    <CardHeader>
                        Register
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <tbody>
                                <Col>
                                    <tr><th scope='row'>First Name</th><td><Input onChange={handleFirstName}/></td></tr>
                                    <tr><th scope='row'>Last Name</th><td><Input onChange={handleLastName}/></td></tr>
                                    <tr><th scope='row'>Username</th><td><Input onChange={handleUsername}/></td></tr>
                                    <tr><th scope='row'>Password</th><td><Input onChange={handlePassword}/></td></tr>
    <tr><th scope='row'>Confirm Password</th><td><Input onChange={handleCPassword}/>{passwordMatch ? "" : cPassword == "" ? "" : <p>Passwords do not match</p>}</td></tr>
                                </Col>
                            </tbody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={createAccount} disabled={passwordMatch ? false : true}>Create Account</Button>
                    </CardFooter>
                </Card>
                {modal ?
                    <Modal>
                        <ModalHeader>
                            Account Created
                        </ModalHeader>
                        <ModalBody>
                            Your account was successfully created
                        </ModalBody>
                        <ModalFooter>
                            <Button>OK</Button>
                            <Button>Login</Button>
                        </ModalFooter>
                    </Modal> : ""
                }
            </Col>

        </div>
    );

}

export default Register;

