import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBleedingEye } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

// Framer Motion modules
import { motion } from 'framer-motion';
// Variants
import { fadeInUp, fadeInSlide } from '../../variants/variants';

const Header = () => (
  <Container>
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '10px' }}>
          <GiBleedingEye size='3rem' /><Span>EdisonAbdiel</Span>
        </a>
      </Link>
    </Div1>
    </motion.div>
    <Div2>
      <li>
        <Link href="#projects">
          <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInSlide}>
            <NavLink>Projects</NavLink>
            </motion.div>
        </Link>
      </li>
      <li>
        <Link href="#techno">
          <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInSlide}>
            <NavLink>Technologies</NavLink>
            </motion.div>
        </Link>
      </li>
      <li>
        <Link href="#random">
          <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInSlide}>
            <NavLink>Random Facts</NavLink>
            </motion.div>
        </Link>
        </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/edisonabdiel">
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
          <AiFillGithub size='2.5rem' />
          </motion.div>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/edison-abdiel-32467b1a7/">
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
          <AiFillLinkedin size='2.5rem' />
          </motion.div>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/edison.abdiel">
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInUp}>
          <AiFillFacebook size='2.5rem' />
          </motion.div>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
