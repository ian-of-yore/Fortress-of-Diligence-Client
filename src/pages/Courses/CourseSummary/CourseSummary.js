import React from 'react';

const CourseSummary = ({ course }) => {
    console.log(course)

    const { title, author } = course;

    return (
        <div className='border border-dark'>
            <h5>{title}</h5>
            <p>{author.name}</p>

        </div>
    );
};

export default CourseSummary;