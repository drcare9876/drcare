import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { keyframes } from '@mui/system';

const items = [
  {
    icon: <LocalShippingRoundedIcon />,
    title: 'Fast Delivery',
    description:
      'Get your medicines delivered within 24 hours, ensuring you never miss a dose.',
  },
  {
    icon: <DiscountRoundedIcon />,
    title: 'Exclusive Discounts',
    description:
      'Enjoy exclusive discounts up to 21% on your medicine purchases, saving you more.',
  },
  {
    icon: <HealthAndSafetyRoundedIcon />,
    title: 'Certified Quality',
    description:
      'All medicines are certified for quality and safety, giving you peace of mind.',
  },
  {
    icon: <AccessTimeRoundedIcon />,
    title: '24/7 Service',
    description:
      'Our service is available round the clock, so you can order medicines anytime.',
  },
  {
    icon: <SupportRoundedIcon />,
    title: 'Customer Support',
    description:
      'Rely on our 24/7 customer support for any assistance with your orders.',
  },
  {
    icon: <VerifiedRoundedIcon />,
    title: 'Trustworthy',
    description:
      'Our services are trusted by thousands of customers for their medicine needs.',
  },
];

const zoomAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" sx={{ animation: `${zoomAnimation} 3s ease-in-out infinite` }}>
            Why Choose Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', animation: `${zoomAnimation} 3s ease-in-out infinite` }}>
            Discover the benefits of our medicine delivery service: fast delivery, exclusive discounts, certified quality, 24/7 service, reliable customer support, and trustworthiness.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%', animation: `${zoomAnimation} 3s ease-in-out infinite` }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom sx={{ animation: `${zoomAnimation} 3s ease-in-out infinite` }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400', animation: `${zoomAnimation} 3s ease-in-out infinite` }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
