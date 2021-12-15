import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import '../assets/react-bootstrap.min.css'

class Bootstrap extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bootstrap;