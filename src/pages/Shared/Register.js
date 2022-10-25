import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    const [termsAndConditions, setTermsAndConditions] = useState(false);

    const handleTermsAndConditions = (event) => {
        setTermsAndConditions(event.target.checked);
    }

    return (
        <Container className='my-5 w-50' style={{ minHeight: "75vh" }}>
            <h3 className='text-white'>Register Your Credentials</h3>
            <Row>
                <Col lg="7">
                    <Form className='text-white text-start'>

                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photoURL' placeholder="Your PhotoURL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={handleTermsAndConditions} type="checkbox" label="Accept Our Terms and Conditions" />
                        </Form.Group>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <Button variant="outline-light" type="submit" disabled={!termsAndConditions}>
                                    Submit
                                </Button>
                            </div>
                            <div>
                                <p><small>Already have an account? <Link className='text-white ms-2' to='/login'>Login</Link> </small></p>
                            </div>
                        </div>
                    </Form>
                </Col>
                <Col lg="5">
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <Button className='mb-3' variant='outline-light'><FaGoogle></FaGoogle> Continue with Google</Button>
                        <Button variant='outline-light'><FaGithub></FaGithub> Continue with GitHub</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;