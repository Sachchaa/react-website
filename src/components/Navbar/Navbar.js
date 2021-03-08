import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcons,
    NavMenu,
    NavItem,
    NavLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <h1>LOGO</h1>
                    </NavLogo>
                    <MobileIcons onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact-us' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar
