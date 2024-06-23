import React from "react";
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Options.css';

const cardData = [
  {
    title: "Colombia",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    imageUrl: "https://i.imgur.com/QYWAcXk.jpeg",
    buttonText: "Read more",
  },
  {
    title: "Mexico",
    description: "Sit amet consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    imageUrl: "https://i.imgur.com/QYWAcXk.jpeg",
    buttonText: "Discover",
  },
  {
    title: "Brazil",
    description: "Consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    imageUrl: "https://i.imgur.com/QYWAcXk.jpeg",
    buttonText: "Explore",
  },
];

const Options = () => {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >    
        <Grid container spacing={2} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <article className="card">
                <img
                  className="card__background"
                  src={card.imageUrl}
                  alt={card.title}
                  width="1920"
                  height="2193"
                />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">{card.title}</h2>
                    <p className="card__description">
                      {card.description}
                    </p>
                  </div>
                  <button className="card__button">{card.buttonText}</button>
                </div>
              </article>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Options;
