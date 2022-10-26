import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaRegClock } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";

const CourseSummary = ({ course }) => {
    // console.log(course)

    const { title, author, course_id, image_url, info } = course;

    return (
        <div className='mb-5 shadow-lg'>
            <Link className='text-decoration-none' to={`/courses/${course_id}`}>
                <Card text='white' className='bg-dark' style={{ height: "400px" }}>
                    <Card.Img variant="top" src={image_url} style={{ height: "250px" }} />
                    <div className='d-flex justify-content-between align-items-center px-3'>
                        <p className='d-flex align-items-center'><small><IoIosPeople className='mb-1' style={{ height: "40px" }}></IoIosPeople> {info.students}</small></p>
                        <p className='d-flex align-items-center'><small><FaRegClock className='mb-1' style={{ height: "40px" }}></FaRegClock> {info.duration}</small></p>
                    </div>
                    <Card.Title><p className='fs-5 px-3'>{title}</p></Card.Title>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'><FaChalkboardTeacher className='me-1'></FaChalkboardTeacher> {author.name}</p>
                        <p className='mb-0'><small><GrUserWorker className='rounded me-1' style={{ backgroundColor: "white", height: "16px", width: "16px" }}></GrUserWorker> {author.profession}</small></p>
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    );
};

export default CourseSummary;