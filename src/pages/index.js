import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../components/Info/Data'
import Info from '../components/Info/Info'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...homeObjectOne} />
            <Info {...homeObjectTwo} />
            <Info {...homeObjectThree} />
        </>
    )
}

export default Home
