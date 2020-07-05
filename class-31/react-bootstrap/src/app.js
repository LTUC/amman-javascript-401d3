import React from 'react';
import ReactDOM from 'react-dom';
// import the React Bootstrap individual component(s)
// that you need in this file
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import the css file
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <main>
            <Form>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Your Info</Card.Title>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Card.Text className="text-muted">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Submit Form</Button>
                    </Card.Body>
                </Card>
            </Form>
        </main>
        <footer>
            <Navbar bg="dark">
                <Navbar.Brand>&copy; 2020 401d3</Navbar.Brand>
            </Navbar>
        </footer>
        </>
    )
}
export default App;