import React from "react";
import { HoverBorderGradient } from "../Aceternity/hover-border-gradient";
import { NavLink } from "react-router-dom";

export function Hero() {
    return (
        <div className="h-[50rem] flex-col w-full bg-white  bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <HoverBorderGradient className={"text-gray-600"}>
                ✨ About Us
            </HoverBorderGradient>
            <h1 className="text-4xl text-[#1e6460] sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-800 py-8 max-w-screen-lg text-center">
                Your Free Medicine's Delivery Partner
            </h1>
            <p className="text-lg text-gray-600 relative max-w-screen-md mx-auto text-center">
                At Dr. Care, we are committed to providing accessible healthcare
                by delivering medicines directly to your doorstep — completely
                free of charge. Our mission is to make sure that no one has to
                worry about how to get their medication, ensuring that
                healthcare reaches every home, wherever it&apos;s needed.
            </p>
            <NavLink className="hover-button my-6" to={"/product"}>
                Browse Products
            </NavLink>
        </div>
    );
}
