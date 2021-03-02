import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroButtonWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Need a Hot Air Balloon ride?</HeroH1>
                <HeroP>
                    Sign up for a ride today.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to='sign-up' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
