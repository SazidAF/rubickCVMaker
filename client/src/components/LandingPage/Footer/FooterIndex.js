import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap,FooterLinkWrapper, FooterLinksContainer, FooterLinkTitle ,FooterLink , FooterLinkItems, SocialIcon, SocialIconLink,SocialLogo, Socialmedia, SocialmediaWrap, WebsiteRights} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Start making CVs </FooterLinkTitle>
                            <FooterLink to="/">Build CV</FooterLink>
                            <FooterLink to="/">Resources</FooterLink>
                            <FooterLink to="/">Templates</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Support </FooterLinkTitle>
                            <FooterLink to="/">Help center</FooterLink>
                            <FooterLink to="/">Feature request</FooterLink>
                            <FooterLink to="/">Contact us</FooterLink>
                    </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/">OurTeam</FooterLink>
                            <FooterLink to="/">What's New</FooterLink>
                            <FooterLink to="/">Customer reviews</FooterLink>
                    </FooterLinkItems>
                    
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <Socialmedia>
                    <SocialmediaWrap>
                        {/* <SocialLogo to=''>CVirtual</SocialLogo> */}
                        <WebsiteRights>CVirtual © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcon>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"> <FaTwitter/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink> 
                        </SocialIcon>
                        
                    </SocialmediaWrap>
                </Socialmedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
