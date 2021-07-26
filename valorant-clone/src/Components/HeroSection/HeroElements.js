import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 3;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover; 
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroP = styled.p`
    color: white;
    font-size: 1 rem;
    text-align: center;
    max-width: 600px;
`;

export const HeroH1 = styled.h1`
    margin-top: 10px;
    color: white;
    font-size: 5rem;
    text-align: center;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;