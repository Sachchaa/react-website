import React from 'react'

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink

} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                            </FooterLinkTitle>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
