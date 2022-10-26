import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ title, id }) => {
    return (
        <div className='mb-4 shadow-lg p-2'>
            <p><small><Link className='text-decoration-none text-white' to={`/courses/${id}`}>{title}</Link></small></p>
        </div>
    );
};

export default LeftSideNav;