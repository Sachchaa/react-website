import React from 'react'
import { Button } from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ButtonWrap,
    ImageWrap,
    Image
} from './InfoElements'

const Info = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine></TopLine>
                                <Heading></Heading>
                                <Subtitle></Subtitle>
                                <ButtonWrap>
                                    <Button to='home' />
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrap>
                                <Image />
                            </ImageWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
