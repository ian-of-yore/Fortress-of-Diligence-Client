import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserNinja } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => console.log(result.user))
            .catch((error) => console.error(error))
    }

    // console.log(user);

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
                    <Nav className='d-flex align-items-top'>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <p data-toggle="tooltip"
                                            data-placement="top"
                                            title={user?.displayName ? user?.displayName : 'Username Unavailable'}>
                                            {
                                                user?.photoURL ? <Image roundedCircle src={user?.photoURL} style={{ height: '30px' }}></Image> : <FaUserNinja></FaUserNinja>
                                            }
                                        </p>

                                    </>
                                    :
                                    <>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <Button variant='dark' size="sm"><Link onClick={handleLogOut} className='text-white text-decoration-none'>LogOut</Link></Button>

                                    </>
                                    :
                                    <>
                                        <Button variant='dark' size="sm"><Link className='text-white text-decoration-none' to='/login'>LogIn</Link></Button>
                                    </>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;