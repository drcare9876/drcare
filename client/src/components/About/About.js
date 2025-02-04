import React from 'react';
import './About.css';
import Nav from '../Navbar/Nav';
import Footer from '../Landing/Footer';
import { Hero } from './Hero';
import { Mission } from './mission';
import { FuturePlans } from './future-plans';

const About = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Mission />
      <FuturePlans />
      <Footer />
    </>

  );
};

export default About;
