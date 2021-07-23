import React from 'react'
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, DownloadLink, FooterLogo, SocialMedia,
SocialMediaWrap, SocialIcons, SocialIconLink, WebsiteRights, FooterLinksContainer, FooterLink, FooterLinksWrapper, Rating } from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <DownloadLink></DownloadLink>
                <FooterLogo></FooterLogo>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>                                                       
                            <SocialIconLink href='/' target='_blank' aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <WebsiteRights>© {new Date().getFullYear()} RIOT GAMES, INC. RIOT GAMES, VALORANT, AND ANY ASSOCIATED
                LOGOS ARE TRADEMARKS, SERVICE MARKS, AND/OR REGISTERED TRADEMARKS OF RIOT GAMES INC.</WebsiteRights>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLink>Privacy Notice</FooterLink>
                        <FooterLink>Terms of Service</FooterLink>
                        <FooterLink>Cookie Preferences</FooterLink>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Rating></Rating>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
