import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Span } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="+4915222643589">+4915222643589</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@edisonabdiel.com">contact@edisonabdiel.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Keep in mind that imagination is at the heart of all innovation. Crush or constrain it and the fun will vanish.” <br />
            <Span>Albert-Laszlo Barabasi.</Span>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/edisonabdiel">
            <AiFillGithub size='2.5rem' />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/edison-abdiel-32467b1a7/">
            <AiFillLinkedin size='2.5rem' />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/edison.abdiel">
            <AiFillFacebook size='2.5rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
