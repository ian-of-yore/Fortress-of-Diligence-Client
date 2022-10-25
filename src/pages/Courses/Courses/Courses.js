import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import CourseSummary from '../CourseSummary/CourseSummary';

const Courses = () => {
    return (
        <div>
            <h2>This is the course Component</h2>
            <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        <CourseSummary></CourseSummary>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;