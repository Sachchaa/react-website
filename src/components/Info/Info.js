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

const Info = ({ lightBg, imgStart, topLine, id, lightText, headLine, lightTextDesc, description, buttonLable, image,
    alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightText={lightTextDesc}>{description}</Subtitle>
                                <ButtonWrap lightBg={lightBg}>
                                    <Button to='home'>{buttonLable}</Button>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrap>
                                <Image src={image} alt={alt} />
                            </ImageWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
