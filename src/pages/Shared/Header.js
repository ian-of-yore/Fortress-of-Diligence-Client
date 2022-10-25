import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Button variant="dark" className="d-flex align-items-center">
                        <img className='me-2 rounded' style={{ height: "25px" }} src={logo} alt="" />
                        <Link className='text-white text-decoration-none' to='/'>Fortress of Diligence</Link>
                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link><Link className='text-white text-decoration-none ' to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link className='text-white text-decoration-none ' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link className='text-white text-decoration-none ' to='/faq'>FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Dark</Nav.Link>
                        <Nav.Link>
                            <Link className='text-white text-decoration-none' to='/login'>Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;