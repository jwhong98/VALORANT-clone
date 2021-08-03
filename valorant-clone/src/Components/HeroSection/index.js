import React from 'react';
import Video from '../../Video/video.gif';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/gif"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroP>A 5v5 character-based tactical shooter</HeroP>
                <HeroH1>VALORANT</HeroH1>
                <HeroBtnWrapper>
                    <Button primary={true} dark={false}>
                        PLAY FREE
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        
    )
}

export default HeroSection;
