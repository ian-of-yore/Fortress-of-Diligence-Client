import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Container className='mt-5 w-75 text-left' style={{ minHeight: "75vh" }}>
            <h5 className='text-white mb-4 text-center'>To land your dream job, you have to absolutely, one hundred percent sure about your dedication, passion, resources, capacity. Here are some frequently asked questions from our learners that might help you in the right direction.</h5>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is "cors" in Express.js?</Accordion.Header>
                    <Accordion.Body>
                        CORS stands for Cross-Origin Resource Sharing. CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access a certain project resources.
                        This policy is used to secure a certain web server from access by other website or domain. For example, only the allowed domains will be able to access hosted files in a server such as a stylesheet, image, or a script.
                        Express allows developers to configure and manage an HTTP server to access resources from the same domain
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the benefits of using "firebase"? What other options are there to implement authentication system?</Accordion.Header>
                    <Accordion.Body>
                        The Firebase Realtime Database is a cloud-hosted database. It is maintained by Google at the moment. So, it ensures solid performance, a huge community of developers, reliability and maintainence.
                        It enables strong tools for developers to craft Android, iOS, and web apps. It offers features such as user authentication, file storage, and application hosting. Though it is widely popular among developers and offers enormous services for developing and production stages, it has its downsides and there are other tools that provide authentication system and some people prefers to explore those choices. Some of them are:
                        <ol>
                            <li>
                                AWS Amplify
                            </li>
                            <li>
                                Heroku
                            </li>
                            <li>
                                Appwrite
                            </li>
                            <li>
                                Kuzzle
                            </li>
                            <li>
                                Back4App
                            </li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work in "React Router DOM"?</Accordion.Header>
                    <Accordion.Body>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route.
                        The private route in React router dom offers great functionality to implement Authorization for different level of visitors.
                        The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated).
                        It renders the child component if the user has verified his/her credentials. Otherwise, if the user is not logged into the website, then it doesn't allow the user to visit that particular
                        route (children).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node.js? How Node.js works?</Accordion.Header>
                    <Accordion.Body>
                        node.js or commonly known as node is as JavaScript runtime environment that offers the possibility of running JavaScript code outside the browser. It's made with chorome's V8 engine with a layer of C++ on top. Node.js is used on the backend service where JavaScript works on the server side of a application. Node.js converts JavaScript with Chrome's V8 engine into machine code behind the scene. Thus making it possible to run JavaScript on thebackend just as it's been commonly used on the frontend.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;