import React, {useEffect, useState} from 'react';
import{Nav, NavbarContainer, NavLogo} from '../LandingPage/Navbar/NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    
    return (
       <>
        <Nav >
            <NavbarContainer>
                <NavLogo to='/'>
                    CVirtual
                </NavLogo>
               
            </NavbarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
