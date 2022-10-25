import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, .95)" }} className='text-white'>
            <CDBFooter className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto py-4 flex-wrap"
                    style={{ width: '80%' }}
                >
                    <CDBBox display="flex" alignItems="center">
                        <div className="d-flex align-items-center p-0 text-dark">
                            <img style={{ height: "20px" }} src={logo} alt="" />
                            <span className="ml-4 h5 mb-0 font-weight-bold text-white ms-2">Fortress of Diligence</span>
                        </div>
                    </CDBBox>
                    <CDBBox>
                        <small className="ml-2">&copy; Fortress of Diligence, 2022. All rights reserved.</small>
                    </CDBBox>
                    <CDBBox display="flex">
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