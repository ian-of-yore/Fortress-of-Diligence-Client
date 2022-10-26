import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData, Link } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)

    const { image_url, title, author, details, info, course_id } = courseDetails;

    return (
        <Container className='my-5'>

            <Card className='text-start w-50 mx-auto border border-1 bg-dark text-white'>
                <div className='d-flex justify-content-around align-items-center text-white px-4 shadow-lg py-4'>
                    <h3>{title}</h3>
                    <p className='ps-3'>icon</p>
                </div>
                <Card.Img variant="top" src={image_url} style={{ height: "400px" }} />
                <div className='d-flex justify-content-around mt-4  text-center'>
                    <div className='px-5 py-2 text-white shadow-lg rounded'>
                        <h5>{info.students}</h5>
                        <p className='mb-0'>Students</p>
                    </div>
                    <div className='px-5 py-2 text-white shadow-lg rounded'>
                        <h5>{info.duration}</h5>
                        <p className='mb-0'>Duration</p>
                    </div>
                    <div className=' px-5 py-2text-white shadow-lg rounded'>
                        <h5>{info.difficulty}</h5>
                        <p className='mb-0'>Difficulty</p>
                    </div>
                </div>
                <div className='my-4 px-4 shadow-lg py-2 mx-4'>
                    <h5>Instructor: {author.name}</h5>
                    <h6>Profession: {author.profession}</h6>
                </div>
                <Card.Text className='mt-1 mb-3 mx-4 shadow-lg px-4 py-2'>
                    {details}
                </Card.Text>
                <Button variant="outline-secondary"><Link className='text-decoration-none text-white' to={`/courses/${course_id}/checkout`}>Get premium access</Link></Button>
            </Card>
        </Container>
    );
};

export default CourseDetails;