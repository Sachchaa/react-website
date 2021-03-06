import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcons,
    NavMenu,
    NavItem,
    NavLink,
    NavButton,
    NavButtonLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h1>LOGO</h1>
                    </NavLogo>
                    <MobileIcons onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about' >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact-us'>Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='signup'>Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to='signin'>
                            Sign In
                        </NavButtonLink>
                    </NavButton>

                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar
