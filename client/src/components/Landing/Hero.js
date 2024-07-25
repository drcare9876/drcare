import React, { useState } from 'react';
import { alpha, Box, Button, Container, Stack, Typography } from '@mui/material';
import Lead from '../Modals/Lead';
import Slider1 from '../Card/Slider1';
import Slider2 from '../Card/Slider2';
import Header from './Header';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const dummyImages = [
  { src: 'https://mercury.akamaized.net/i/3a7c4ca4c6278080634ddec324ca978e_263859_0.jpg', alt: 'Image 1' },
  { src: 'https://mercury.akamaized.net/i/e79da7dbff64419b203841851de70768_201575_0.jpg', alt: 'Image 2' },
  { src: 'https://mercury.akamaized.net/i/df0f88cb31b322849ba366d9a5d0ab15_232025_0.jpg', alt: 'Image 3' },
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    pincode: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage: theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
<Carousel
        autoPlay
        animation="slide"
        indicators={false}
        interval={3000}
        navButtonsAlwaysVisible
        sx={{ mt: 12 }}  // Add margin-top to the Carousel
      >
        {dummyImages.map((item, i) => (
          <Paper key={i}>
            <img src={item.src} alt={item.alt} style={{ width: '100%',height:'auto' }} />
          </Paper>
        ))}
      </Carousel>


    
      <Container>
      <Slider2/>
      </Container>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 2, sm: 2 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Header style={{ width: '100%' }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ width: '100%', alignItems: 'center' }}
        >
          {/* <Slider1 /> */}
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719817994/Aseets/fun-man-woman-teenager-animation_540381-3820_peyk2p-removebg-preview_x1slz7.png" alt="Fun Animation" style={{ width: '100%', maxWidth: '300px' }} />
          <Stack spacing={2} sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 'clamp(2.5rem, 5vw + 1rem, 4rem)',
              }}
            >
              Discover our latest&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)',
                  color: (theme) => theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
              >
                products
              </Typography>
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
            >
              Explore our comprehensive range of healthcare products designed to
              improve your well-being. Stay ahead with the latest in medical
              innovations and trusted pharmaceutical solutions.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Browse Products
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Lead
        open={open}
        handleClose={handleClose}
        formValues={formValues}
        handleChange={handleChange}
      />
    </Box>
  );
}
