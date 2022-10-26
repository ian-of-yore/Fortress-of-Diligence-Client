import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import img404 from '../../../assets/404_img.png'

const PageNotFound = () => {
    return (
        <div>
            <Header></Header>
            <img className='p-5 rounded-pill' style={{ minWidth: "100vw" }} src={img404} alt="" />
        </div>
    );
};

export default PageNotFound;