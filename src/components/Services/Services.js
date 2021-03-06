import React from 'react'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,

} from './ServicesElements'

import IconOne from '../../images/svg-1.svg'
import IconTwo from '../../images/svg-2.svg'
import IconThree from '../../images/svg-3.svg'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={IconOne} />
                    <ServicesH2>Service 1</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={IconTwo} />
                    <ServicesH2>Service 2</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={IconThree} />
                    <ServicesH2>Service 3</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
