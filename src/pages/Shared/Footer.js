import React from 'react';
import Container from 'react-bootstrap/Container';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='bg-dark text-white rounded'>
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
                                <CDBFooterLink href="/">Resources</CDBFooterLink>
                                <CDBFooterLink href="/">About Us</CDBFooterLink>
                                <CDBFooterLink href="/">Contact</CDBFooterLink>
                                <CDBFooterLink href="/">Blog</CDBFooterLink>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Help
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <CDBFooterLink href="/">Support</CDBFooterLink>
                                <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                                <CDBFooterLink href="/">Sign In</CDBFooterLink>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Products
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <CDBFooterLink href="/">Windframe</CDBFooterLink>
                                <CDBFooterLink href="/">Loop</CDBFooterLink>
                                <CDBFooterLink href="/">Contrast</CDBFooterLink>
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
        </Container>
    );
};

export default Footer;