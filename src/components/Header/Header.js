import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiBoltEye } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '10px' }}>
          <GiBoltEye size='3rem' /><Span>EdisonAbdiel</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#techno">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/edisonabdiel">
        <AiFillGithub size='2.5rem' />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/edison-abdiel-32467b1a7/">
        <AiFillLinkedin size='2.5rem' />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/edison.abdiel">
        <AiFillFacebook size='2.5rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
