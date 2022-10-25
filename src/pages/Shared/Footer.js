import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, .95)" }} className='text-white'>
            <CDBFooter className="shadow">
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox className="text-start">
                            <div variant="dark" className="d-flex align-items-center">
                                <img className='me-2 rounded' style={{ height: "25px" }} src={logo} alt="" />
                                <Link className='text-light text-decoration-none' to='/'>Fortress of Diligence</Link>
                            </div>
                            <p className="my-3" style={{ width: '250px' }}>
                                We are creating High Quality Resources and tools to Aid developers during the
                                developement of their projects
                            </p>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Devwares
                            </p>
                            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                                <p>Resources</p>
                                <p>About Us</p>
                                <p>Contact</p>
                                <p>Blog</p>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Help
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <p>Support</p>
                                <p>Sign Up</p>
                                <p>Sign In</p>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Products
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <p>lmao</p>
                                <p>lmao</p>
                                <p>lmao</p>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        style={{ width: '100%' }}
                        className="mx-auto mt-4"
                    >
                        <small className="text-center" style={{ width: '50%' }}>
                            &copy; Fortress of Diligence. All rights reserved.
                        </small>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBFooter>
        </div >
    );
};

export default Footer;