import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    console.log(course)

    const { title, author, course_id } = course;

    return (
        <div className='border border-dark mb-3'>
            <Link className='text-decoration-none' to={`/courses/${course_id}`}>
                <h5>{title}</h5>
                <p>{author.name}</p>
            </Link>
        </div>
    );
};

export default CourseSummary;