import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    // console.log(course)

    const { title, author, course_id, details, image_url, info } = course;

    return (
        <div className='mb-5 shadow-lg'>
            <Link className='text-decoration-none' to={`/courses/${course_id}`}>
                <Card text='white' className='bg-dark' style={{ height: "400px" }}>
                    <Card.Img variant="top" src={image_url} style={{ height: "250px" }} />
                    <div className='d-flex justify-content-between align-items-center px-3 mt-1'>
                        <p><small>{info.students} students</small></p>
                        <p><small>{info.duration}</small></p>
                    </div>
                    <p className='fs-5'>{title}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>{author.name}</p>
                        <p><small>{author.profession}</small></p>
                    </div>
                </Card>
            </Link>
        </div>
    );
};

export default CourseSummary;