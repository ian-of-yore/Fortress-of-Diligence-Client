import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { signInEmailPassword, signInProvider } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signInEmailPassword(email, password)
            .then((result) => {
                setSuccess("You've verified your credentials! Welcome!");
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = (((error.message).split(' ')[2]).split('/')[1]).slice(0, -2);
                setError(errorMessage);
                setSuccess('');
            })
    }

    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInProvider(providerGoogle)
            .then((result) => {
                setSuccess("You've verified your credentials! Welcome!");
                setError('');
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = (((error.message).split(' ')[2]).split('/')[1]).slice(0, -2);
                setError(errorMessage);
                setSuccess('');
            })
    }


    return (
        <Container className='mt-5' style={{ minHeight: "75vh" }}>
            <h3 className='text-white text-center'>Verify Your Credentials</h3>
            <Form onSubmit={handleFormSubmit} className='text-white text-start w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <p><small className='text-success'>{success}</small></p>
                <p><small className='text-danger'>{error}</small></p>

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
                    <Button onClick={handleGoogleSignIn} className='mb-3' variant='outline-light'><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGitHubSignIn} variant='outline-light'><FaGithub></FaGithub> Login with GitHub</Button>
                </div>
            </Form>
        </Container>
    );
};

export default Login;