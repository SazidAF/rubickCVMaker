import React, {useEffect, useState} from 'react';
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavLink, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    
    return (
       <>
        <Nav >
            <NavbarContainer>
                <NavLogo to='/'>
                    CVirtual
                </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to = ""
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}>CV</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "" smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}>Templates</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "" smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}>Career Blogs</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLink to = "/">About</NavLink>
                   </NavItem>
               </NavMenu>

               <NavBtn>
                   <NavBtnLink to = '/auth'> Sign In</NavBtnLink>
               </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
