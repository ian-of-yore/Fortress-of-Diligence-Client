import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import CourseSummary from '../CourseSummary/CourseSummary';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>This is the course Component</h2>
            <Container>
                <Row>
                    <Col lg="4">
                        {
                            courses.map(course => <LeftSideNav
                                key={course.course_id}
                                title={course.title}
                            ></LeftSideNav>)
                        }
                    </Col>
                    <Col lg="8">
                        {
                            courses.map(course => <CourseSummary
                                key={course.course_id}
                                course={course}
                            ></CourseSummary>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;