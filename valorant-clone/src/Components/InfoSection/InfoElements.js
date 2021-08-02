import styled from 'styled-components';

export const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#ECE8E1' : '#FF4655')};
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: auto;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#ECE8E1' : 'black')};
    margin-bottom: 24px;
    font-size: 7rem;
    line-height: 1.1;
    font-weight: 800;
`;

export const Subtitle = styled.h2`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightText}) => (lightText ? '#ECE8E1' : 'black')};
`;

export const Content = styled.p`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextContent}) => (lightTextContent ? '#ECE8E1' : '#768079')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;