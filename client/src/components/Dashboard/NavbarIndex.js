import React, {useEffect, useState} from 'react';
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavText, NavBtn, NavBtnLink2} from '../LandingPage/Navbar/NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    const [user,setUser]= useState(JSON.parse(localStorage.getItem("profile")));
    const isUser = user;
    console.log(user.result);
    
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
                       offset={-80}>Home</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "" smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}>Documents</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "" smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}>Contact Us</NavLinks>
                   </NavItem>
                   <NavItem>
                        {user? <NavText to = "/">{user.result.name}</NavText>: <NavText to = "/"></NavText>}
                      
                   </NavItem>
               </NavMenu>

               <NavBtn>
                   <NavBtnLink2 to = '/logout'> Log out</NavBtnLink2>
               </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
