import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)

    const { image_url, title, author, details, info } = courseDetails;

    return (
        <Container className='my-5'>
            <div className='d-flex justify-content-around align-items-center w-75 mx-auto my-2'>
                <h3>{title}</h3>
                <p>Some bullshit icon</p>
            </div>
            <Card className='text-start w-50 mx-auto border border-1'>
                <Card.Img variant="top" src={image_url} style={{ height: "400px" }} />
                <div className='d-flex justify-content-around my-3 text-center'>
                    <div className='border border-3 px-5 py-2 bg-secondary text-white shadow-lg rounded'>
                        <h5>{info.students}</h5>
                        <p className='mb-0'>Students</p>
                    </div>
                    <div className='border border-3 px-5 py-2 bg-secondary text-white shadow-lg rounded'>
                        <h5>{info.duration}</h5>
                        <p className='mb-0'>Duration</p>
                    </div>
                    <div className='border border-3 px-5 py-2 bg-secondary text-white shadow-lg rounded'>
                        <h5>{info.difficulty}</h5>
                        <p className='mb-0'>Difficulty</p>
                    </div>
                </div>
                <div className='my-4 px-4'>
                    <h5>Instructor: {author.name}</h5>
                    <h6>Profession: {author.profession}</h6>
                </div>
                <Card.Text className='mt-1 mb-3 px-4'>
                    {details}
                </Card.Text>
                <Button variant="outline-dark">Go somewhere</Button>

            </Card>
        </Container>
    );
};

export default CourseDetails;