import React from 'react';
import './Courses.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import CourseSummary from '../CourseSummary/CourseSummary';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col lg="3">
                        <div>
                            {
                                courses.map(course => <LeftSideNav
                                    key={course.course_id}
                                    title={course.title}
                                    id={course.course_id}
                                ></LeftSideNav>)
                            }
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className='course-container'>
                            {
                                courses.map(course => <CourseSummary
                                    key={course.course_id}
                                    course={course}
                                ></CourseSummary>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;