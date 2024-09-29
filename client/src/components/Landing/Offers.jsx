import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const dummyImages = [
    { src: "/image-1.jpg", alt: "Image 1" },
    { src: "/image-2.jpg", alt: "Image 2" },
    { src: "/image-3.jpg", alt: "Image 3" },
];
const Offers = () => {
    return (
        <section className=" w-full px-4 md:px-12 xl:px-40 my-6">
            <Carousel
                autoPlay
                animation="slide"
                indicators={false}
                interval={3000}
                navButtonsAlwaysVisible
                sx={{ mt: 12 }} // Add margin-top to the Carousel
            >
                {dummyImages.map((item) => (
                    <Paper key={item.src}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            height={400}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Paper>
                ))}
            </Carousel>
        </section>
    );
};

export default Offers;
