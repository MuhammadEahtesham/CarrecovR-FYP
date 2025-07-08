import React from 'react'
import { FooterContainer, FooterWrap, FooterLinks, FooterLinksContainer, FooterLinksItems, FooterLinksTitle, FooterLinksWrapper, SocialIconLink, SocialIcons, SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights } from './FooterElements'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const index = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle> About Us</FooterLinksTitle>
                        <FooterLinks to='/'>How it works</FooterLinks>
                        <FooterLinks to='/'>Testinomials</FooterLinks>
                        <FooterLinks to='/'>Terms of service</FooterLinks>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle> Social Media</FooterLinksTitle>
                        <FooterLinks to='/'>Facebook</FooterLinks>
                        <FooterLinks to='/'>Instagram</FooterLinks>
                        <FooterLinks to='/'>Twitter</FooterLinks>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Car Recover
                    </SocialLogo>
                    <WebsiteRights>Car Recover Ɵ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default index