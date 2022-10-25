import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ title, id }) => {
    return (
        <div className='mb-4 shadow-lg p-2'>
            <h5><Link className='text-decoration-none text-white' to={`/courses/${id}`}>{title.slice(0, 30)}</Link></h5>
        </div>
    );
};

export default LeftSideNav;