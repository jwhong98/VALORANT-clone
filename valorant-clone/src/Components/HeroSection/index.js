import React from 'react'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroP>A 5v5 character-based tactical shooter</HeroP>
                <HeroH1>VALORANT</HeroH1>
                <HeroBtnWrapper>
                    <Button>

                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
