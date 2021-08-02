import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper,
Heading, Subtitle, Content, BtnWrap, Column2, ImgWrap, Img } from './InfoElements';
import {Button} from '../ButtonElement';

const InfoSection = ({lightBg, id, imgStart, lightText, lightTextContent, heading, subtitle, content, buttonLabel, img}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <Subtitle lightText={lightText}>{subtitle}</Subtitle>
                                <Content lightTextContent={lightTextContent}>{content}</Content>
                                <BtnWrap>
                                    <Button>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>    
        </>
    )
}

export default InfoSection;
