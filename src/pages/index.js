import Head from '../components/Head/Head';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import Certifications from '../components/Certifications/Certifications';
import { Layout } from '../layout/Layout';

const Home = () => (
  <Layout>
    <Head />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Timeline />
    <Certifications />
  </Layout>
);

export default Home;
