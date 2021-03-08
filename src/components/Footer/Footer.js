import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLinks

} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Logo</SocialLogo>
                        <WebsiteRights>
                            Logo &copy; {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLinks href='./' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLinks>
                            <SocialIconLinks href='./' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLinks>
                            <SocialIconLinks href='./' target='_blank' aria-label='YouTube'>
                                <FaYoutube />
                            </SocialIconLinks>
                            <SocialIconLinks href='./' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLinks>
                            <SocialIconLinks href='./' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLinks>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
