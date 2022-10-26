import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {

    const course = useLoaderData();

    return (
        <div className='text-white' style={{ minHeight: "80vh" }}>
            <h1>This is the checkout Page for:</h1>
            <h3>{course.title}</h3>
        </div>
    );
};

export default CheckOut;