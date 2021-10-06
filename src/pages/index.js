import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

// Framer Motion modules
import { motion } from 'framer-motion';
// Variants
import { fadeInSlide } from '../variants/variants';

const Home = () => {
  return (
    <Layout>
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} variants={fadeInSlide} >
        <Header />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
        <Footer/>
        </motion.div>
    </Layout>
  );
};

export default Home;
