import React from 'react'

import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebuttonWrapper,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about'>
                            About
                        </SidebarLink>
                        <SidebarLink to='services'>
                            Services
                        </SidebarLink>
                        <SidebarLink to='conatct-us'>
                            Contact Us
                        </SidebarLink>
                        <SidebarLink to='signup'>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SidebuttonWrapper>
                        <SidebarRoute>
                            Sign In
                        </SidebarRoute>
                    </SidebuttonWrapper>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
