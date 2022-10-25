import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    console.log(course)

    const { title, author, course_id, details, image_url, info } = course;

    return (
        <div className='mb-5'>
            <Card bg='dark' text='white' style={{ height: "350px" }}>
                <Card.Img variant="top" src={image_url} style={{ height: "200px" }} />
                <p>Total Students and Duration</p>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Footer>Instructor Info</Card.Footer>
            </Card>
        </div>
    );
};

export default CourseSummary;