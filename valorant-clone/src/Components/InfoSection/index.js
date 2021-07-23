import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper,
Heading, Subtitle, Content, BtnWrap, Column2, ImgWrap, Img } from './InfoElements';
import {Button} from '../ButtonElement';

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading></Heading>
                                <Subtitle></Subtitle>
                                <Content></Content>
                                <BtnWrap>
                                    <Button></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>    
        </>
    )
}

export default InfoSection;
