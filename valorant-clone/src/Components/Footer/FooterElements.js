import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #111111;
`;

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const DownloadLink = styled(Link)`
    color: #7E7E7E;
`;

export const FooterLogo = styled(Link)`

`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

`;

export const WebsiteRights = styled.small`
    color: #7E7E7E;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
`;

export const FooterLink = styled.a`
    color: #7E7E7E;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
`

export const Rating = styled.div`

`;