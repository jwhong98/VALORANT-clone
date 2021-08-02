import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #111111;
    height: 700px;
    padding: 50px;
`;

// export const FooterWrap = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     max-width: 1100px;
//     margin: 0 auto;
// `;

export const Download = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const DownloadLink = styled(Link)`
    color: #7E7E7E;
    
`;

export const FooterLogo = styled(Link)`

`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    margin: auto;
    margin-bottom: 50px;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    max-width: 1100px;
    margin: 20px, auto;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #768079;
    font-size: 24px;
`;

export const WebsiteRights = styled.small`
    color: #7E7E7E;
    display: flex;
    font-size: 0.6rem;
    margin: auto;
    max-width: 450px;
    margin-bottom: 30px;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
`;

export const FooterLink = styled(Link)`
    color: #7E7E7E;
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
`

export const Rating = styled.div`

`;