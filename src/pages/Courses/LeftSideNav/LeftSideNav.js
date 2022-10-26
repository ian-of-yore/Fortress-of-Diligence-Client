import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ title, id }) => {
    return (
        <Button variant='dark' className='mb-4 shadow-lg p-2 border'>
            <Link className='text-decoration-none text-white' to={`/courses/${id}`}> <p><small>{title}</small></p></Link>
        </Button>
    );
};

export default LeftSideNav;