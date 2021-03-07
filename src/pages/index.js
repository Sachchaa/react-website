import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import { homeObjectOne, homeObjectThree } from '../components/Info/Data'
import Info from '../components/Info/Info'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

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
            <Services />
            <Info {...homeObjectThree} />
            <Footer />
        </>
    )
}

export default Home
