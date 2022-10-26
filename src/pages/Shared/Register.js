import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signInProvider, createUser, updateUserProfile } = useContext(AuthContext);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword)
        if (password === confirmPassword) {
            createUser(email, password)
                .then((result) => {
                    console.log(result.user)
                    setSuccess("Registration Successfull");
                    setError('');
                    form.reset();
                    updateUserProfile({
                        displayName: name,
                        photoURL: photo
                    })
                })
                .catch((error) => {
                    const errorMessage = (((error.message).split(' ')[2]).split('/')[1]).slice(0, -2);
                    setError(errorMessage);
                })
        }
        else {
            setError("Password did not match. Try Again!")
            setSuccess('');
        }

    }

    const handleTermsAndConditions = (event) => {
        setTermsAndConditions(event.target.checked);
    }

    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInProvider(providerGoogle)
            .then((result) => {
                setSuccess("You've verified your credentials! Welcome!");
                setError('');
            })
            .catch((error) => {
                const errorMessage = (((error.message).split(' ')[2]).split('/')[1]).slice(0, -2);
                setError(errorMessage);
                setSuccess('');
            })
    }

    const handleGitHubSignIn = () => {
        signInProvider(providerGitHub)
            .then((result) => {
                setSuccess("You've verified your credentials! Welcome!");
                setError('');
            })
            .catch((error) => {
                const errorMessage = (((error.message).split(' ')[2]).split('/')[1]).slice(0, -2);
                setError(errorMessage);
                setSuccess('');
            })
    }

    return (
        <Container className='my-5 w-75' style={{ minHeight: "75vh" }}>
            <h3 className='text-white'>Register Your Credentials</h3>
            <Row>
                <Col lg="9">
                    <Form onSubmit={handleFormSubmit} className='text-white text-start w-75 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter your full name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photoURL' placeholder="Your PhotoURL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                        </Form.Group>

                        <p><small className='text-success'>{success}</small></p>
                        <p><small className='text-danger'>{error}</small></p>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={handleTermsAndConditions} type="checkbox" label="Accept Terms and Conditions" />
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
                <Col lg="3">
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <Button onClick={handleGoogleSignIn} className='mb-3' variant='outline-light'><FaGoogle></FaGoogle> Continue with Google</Button>
                        <Button onClick={handleGitHubSignIn} variant='outline-light'><FaGithub></FaGithub> Continue with GitHub</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;