import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Hero from "./Hero.jsx";
import Highlights from "./Highlights";
import Nav from "../Navbar/Nav";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Faq from "./Faq";
import StatsComponent from "./StatsComponent";
import Popup from "../Modals/Popup";

import Location from "./Location";
import Offers from "./Offers.jsx";

const Landing = () => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Hero />
      <Offers />
      <Box sx={{ bgcolor: "background.default" }}>
        <Highlights />
        <Features />
        <Testimonials />
        <Faq />
        <StatsComponent />
        <Location />
        <Footer />
      </Box>
      <Popup />
    </>
  );
};

export default Landing;
