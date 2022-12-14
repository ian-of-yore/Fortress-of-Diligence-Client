import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData, Link } from 'react-router-dom';
import { MdOutlineSubtitles, MdAttachMoney } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    // console.log(courseDetails)

    const { image_url, title, author, details, info, course_id } = courseDetails;

    return (
        <Container ref={ref} className='my-5'>
            <Card className='text-start w-75 mx-auto border border-1 bg-dark text-white'>
                <div className='d-flex justify-content-between align-items-center px-5 text-white shadow-lg py-4'>
                    <h4 className='text-left'><MdOutlineSubtitles className='pb-1' style={{ height: "30px" }}></MdOutlineSubtitles> {title}</h4>
                    <Pdf targetRef={ref} filename="course-details.pdf" x={1} y={20} scale={0.6}>
                        {({ toPdf }) => <button onClick={toPdf}><p><GrDocumentDownload style={{ backgroundColor: "White", height: "25px", width: "25px" }}></GrDocumentDownload></p></button>}
                    </Pdf>
                </div>
                <Card.Img variant="top" className='bg-light' src={image_url} style={{ height: "450px" }} />
                {/* <img src={image_url} className="bg-light"  alt="" /> */}
                <div>
                    <Row className='d-flex justify-content-around mt-4  text-center'>
                        <Col lg="4" sm="12">
                            <div className='px-5 py-2 text-white shadow-lg rounded'>
                                <h5>{info.students}</h5>
                                <p className='mb-0'>Students</p>
                            </div>
                        </Col>
                        <Col lg="4" sm="12">
                            <div className='px-5 py-2 text-white shadow-lg rounded'>
                                <h5>{info.duration}</h5>
                                <p className='mb-0'>Duration</p>
                            </div>
                        </Col>
                        <Col lg="4" sm="12">
                            <div className=' px-5 py-2 text-white shadow-lg rounded'>
                                <h5>{info.difficulty}</h5>
                                <p className='mb-0'>Difficulty</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='my-4 px-4 shadow-lg py-2 mx-4'>
                    <h5>Instructor: {author.name}</h5>
                    <h6>Profession: {author.profession}</h6>
                </div>
                <Card.Text className='mt-1 mb-3 mx-4 shadow-lg px-4 py-2'>
                    {details}
                </Card.Text>
                <Button variant="outline-secondary"><Link className='text-decoration-none text-white' to={`/courses/${course_id}/checkout`}><MdAttachMoney></MdAttachMoney> Get premium access <MdAttachMoney></MdAttachMoney></Link></Button>
            </Card>
        </Container>
    );
};

export default CourseDetails;