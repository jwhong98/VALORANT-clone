import styled from 'styled-components';

export const NewsContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ECE8E1;
`;

export const TransparentText = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    justify-content: center;
`

export const Line1 = styled.span`
    font-size: 15rem;
    color: #ECE8E1;
    font-weight: 600;
    text-shadow: -1px -1px 0 #DBD8D2, 1px -1px 0 #DBD8D2, -1px 1px 0 #DBD8D2, 1px 1px 0 #DBD8D2;
    z-index: 0;
    margin-top: -120px;
`

export const Line2 = styled.span`
    font-size: 15rem;
    color: #ECE8E1;
    font-weight: 600;
    text-shadow: -1px -1px 0 #DBD8D2, 1px -1px 0 #DBD8D2, -1px 1px 0 #DBD8D2, 1px 1px 0 #DBD8D2;
    z-index: 0;
    position: relative;
    left: 5rem;
`

export const NewsH1 = styled.h1`
    font-size: 4rem;
    color: #FF4655;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const NewsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    z-index: 1;
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

