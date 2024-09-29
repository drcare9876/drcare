import React from "react";
import { HoverBorderGradient } from "../Aceternity/hover-border-gradient";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

const items = [
    {
        icon: <LocalShippingRoundedIcon className="size-20" />,
        title: "Fast Delivery",
        description:
            "Get your medicines delivered within 24 hours, ensuring you never miss a dose.",
    },
    {
        icon: <DiscountRoundedIcon />,
        title: "Exclusive Discounts",
        description:
            "Enjoy exclusive discounts up to 21% on your medicine purchases, saving you more.",
    },
    {
        icon: <HealthAndSafetyRoundedIcon />,
        title: "Certified Quality",
        description:
            "All medicines are certified for quality and safety, giving you peace of mind.",
    },
    {
        icon: <AccessTimeRoundedIcon />,
        title: "24/7 Service",
        description:
            "Our service is available round the clock, so you can order medicines anytime.",
    },
    {
        icon: <SupportRoundedIcon />,
        title: "Customer Support",
        description:
            "Rely on our 24/7 customer support for any assistance with your orders.",
    },
    {
        icon: <VerifiedRoundedIcon />,
        title: "Trustworthy",
        description:
            "Our services are trusted by thousands of customers for their medicine needs.",
    },
    {
        icon: <AccessTimeRoundedIcon />,
        title: "24/7 Service",
        description:
            "Our service is available round the clock, so you can order medicines anytime.",
    },
    {
        icon: <SupportRoundedIcon />,
        title: "Customer Support",
        description:
            "Rely on our 24/7 customer support for any assistance with your orders.",
    },
];

const Services = () => {
    return (
        <section className=" flex-col w-full bg-white relative flex items-center justify-center my-8">
            <HoverBorderGradient className={"text-gray-600"}>
                Best-in-class
            </HoverBorderGradient>
            <Typography
                component={"h1"}
                variant="h4"
                className="text-black font-bold"
            >
                Healthcare Services
            </Typography>
            <div className="w-full px-44 mt-4">
                <Grid container spacing={2} className="w-full">
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                className="p-4 flex flex-col justify-center items-center"
                            >
                                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                                <Typography
                                    fontWeight="medium"
                                    gutterBottom
                                    className="text-black"
                                >
                                    {item.title}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default Services;
