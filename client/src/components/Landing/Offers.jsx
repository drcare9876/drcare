import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const dummyImages = [
    { src: "/banner-1.webp", alt: "banner 1" },
    { src: "/banner-1.webp", alt: "banner 2" },
    { src: "/banner-1.webp", alt: "banner 3" },
];
const Offers = () => {
    return (
        <section className=" w-full px-2 md:px-12 xl:px-40 my-6">
            <Carousel
                autoPlay
                animation="slide"
                indicators={false}
                interval={3000}
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
