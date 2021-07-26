import styled from 'styled-components';

export const NewsContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background: #ECE8E1;

`;

export const NewsH1 = styled.h1`
    font-size: 4rem;
    color: #FF4655;
    z-index: 1;
`

export const NewsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`;

export const NewsCard = styled.div`
    background: #ECE8E1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 340px;
`

export const NewsImg = styled.img`
    height: 160px;
    width: 100%;
    margin-bottom: 10px;
`;

export const NewsP = styled.p`
    font-size: 0.75rem;
    margin: 10px 0;
`;

export const NewsH2 = styled.h2`
    font-size: 1rem;
    
`;

