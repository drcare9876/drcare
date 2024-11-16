import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Slider1 from '../Card/Slider1';  // Adjust the import path as necessary
import './About.css';
import Nav from '../Navbar/Nav';
import Footer from '../Landing/Footer';
import { Hero } from './Hero';
import { Mission } from './mission';
import { FuturePlans } from './future-plans';

const sections = [
  {
    image: 'https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775594/MEDICINE_rhqafz.jpg',
    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Improved Cardiovascular Health:</strong> Regular physical activity and a balanced diet can significantly reduce the risk of heart disease and stroke.
      </>
    ),
  },
  {
    image: 'https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775595/HOSPITAL_fcnick.jpg',
    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Enhanced Mental Health:</strong> Exercise and proper nutrition can improve mental well-being, reduce stress, anxiety, and depression, and enhance cognitive function.
      </>
    ),
  },
  {
    image: 'https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775594/HEART_fz0gga.jpg',
    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Strengthened Immune System:</strong> Consuming a diet rich in vitamins and minerals can boost the immune system, helping to ward off illnesses and infections.
      </>
    ),
  },


];

const points = [
  {
    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Better Digestive Health:</strong> A diet high in fiber, combined with adequate hydration, can improve digestion and prevent constipation.
      </>
    ),
  },
  {
    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Weight Management:</strong> Balanced nutrition and regular exercise are key to maintaining a healthy weight, reducing the risk of obesity-related conditions such as diabetes and hypertension.
      </>
    ),
  },
  {
    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Bone and Joint Health:</strong> Weight-bearing exercises and a diet rich in calcium and vitamin D can strengthen bones and joints, reducing the risk of osteoporosis and arthritis.
      </>
    ),
  },
  {

    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Improved Sleep Quality:</strong> Regular physical activity and a healthy diet can improve sleep patterns, leading to better overall health and well-being.
      </>
    ),
  },
  {

    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Enhanced Energy Levels:</strong> Proper nutrition and regular exercise can boost energy levels, improving daily productivity and overall quality of life.
      </>
    ),
  },
  {

    text: (
      <>
        <strong style={{ color: '#1e6460' }}>Reduced Risk of Chronic Diseases:</strong> A healthy lifestyle can lower the risk of chronic diseases such as diabetes, cancer, and metabolic syndrome.
      </>
    ),
  },

];

const About = () => {
  return (
    <>

      <Nav />
      <Hero />
      <Mission />
      <FuturePlans />
      {/* <Container sx={{ py: 15 }}>

        {sections.map((section, index) => (
          <Box
            key={index}
            className="about-section"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={section.image}
              alt="About"
              className="about-image"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
                mb: { xs: 2, md: 0 },
              }}
            />
            <Typography
              variant="body1"
              className="about-text"
              style={{ color: 'black' }}
              sx={{ width: { xs: '100%', md: '50%' }, pl: { md: index % 2 === 0 ? 2 : 0 }, pr: { md: index % 2 !== 0 ? 2 : 0 } }}
            >
              {section.text}
            </Typography>
          </Box>
        ))}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            mt: 4,
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '50%' }, mb: { xs: 2, md: 0 } }}>
            <Slider1 />
          </Box>
          <List sx={{ width: { xs: '100%', md: '50%' }, pl: { md: 2 } }}>
            {points.map((section, index) => (
              <ListItem key={index} className="point-item">
                <ListItemIcon className="point-icon">
                  <CheckCircleIcon style={{ color: 'green' }} />
                </ListItemIcon>
                <ListItemText primary={section.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container> */}
      <Footer />
    </>

  );
};

export default About;
