import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBoltEye } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

// Framer Motion modules
import { motion } from 'framer-motion';
// Variants
import { fadeInUp, stagger, fadeIn, fadeInSlide } from '../../variants/variants';

const Header = () => (
  <Container>
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '10px' }}>
          <GiBoltEye size='3rem' /><Span>EdisonAbdiel</Span>
        </a>
      </Link>
    </Div1>
    </motion.div>
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
        <Link href="#random">
          <NavLink>Random Facts</NavLink>
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
