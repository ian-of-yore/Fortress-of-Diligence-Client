import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <Container className='mt-5' style={{ minHeight: "75vh" }}>
            <h3 className='text-white'>Verify Your Credentials</h3>
            <Form onSubmit={handleFormSubmit} className='text-white text-start w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </div>
                    <div>
                        <p><small>New Here? <Link className='text-white ms-2' to='/register'>Register</Link> </small></p>
                    </div>
                </div>

                <div className='d-flex flex-column mt-4 pt-2'>
                    <Button className='mb-3' variant='outline-light'><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant='outline-light'><FaGithub></FaGithub> Login with GitHub</Button>
                </div>
            </Form>
        </Container>
    );
};

export default Login;