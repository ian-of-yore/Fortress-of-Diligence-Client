import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ title, id }) => {
    return (
        <div className='border border-danger mb-4'>
            <h5><Link className='text-decoration-none' to={`/courses/${id}`}>{title.slice(0, 30)}</Link></h5>
        </div>
    );
};

export default LeftSideNav;