import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import homeImage from '../../assets/homeImg.jpeg'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Home = () => {

    return (
        <div className='text-white mt-3' style={{ minHeight: "79vh" }}>
            <div className='text-center'>
                <p>Upskill your team with world-class learning. <u>New customers can claim 10% discount.</u> <AiOutlineClose></AiOutlineClose> </p>
            </div>
            <Container className='mt-5'>
                <Row className='d-flex align-items-center mb-4'>
                    <Col lg="6">
                        <div className='pb-5'>
                            <h1 className='display-4'>Solidify Your Aspirations</h1>
                            <p>Start, switch, or advance your career with new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.</p>
                            <Button variant='outline-primary' size="lg" className='me-5 mt-4 text-white'>Join For Free</Button>
                            <Button variant='outline-light' size="lg" className='mt-4'>Try for Business</Button>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img className='img-fluid rounded' src={homeImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;