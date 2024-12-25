import React from "react";
import { HoverBorderGradient } from "../Aceternity/hover-border-gradient";
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <main className="min-h-[50rem] flex-col w-full bg-white  bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="mt-40 flex flex-col items-center justify-center mx-6">
                <HoverBorderGradient className={"text-gray-600"}>
                    ✨ Welcome to DrCare
                </HoverBorderGradient>
                <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-800 py-8 max-w-screen-lg mx-auto text-center" style={{color:'#1e6460'}}>
                Your Free Medicine's Delivery Partner
                </h1>
                <p className="text-lg text-gray-600 relative max-w-screen-md mx-auto text-center">
                At Dr. Care, we are committed to providing accessible healthcare by delivering medicines directly to your doorstep — completely free of charge. Our mission is to make sure that no one has to worry about how to get their medication, ensuring that healthcare reaches every home, wherever it's needed.
                </p>
                <NavLink className="hover-button my-6" to={"/product"}>
                    Browse Products
                </NavLink>
            </div>

            {/* <div className="flex items-center justify-center flex-wrap gap-4 my-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className=" rounded-2xl border p-2 bg-white"
                    >
                        <img
                            src={`/medicine-${index + 1}.png`}
                            alt="Medicine"
                            className="w-60 h-40 rounded-2xl"
                        />
                    </div>
                ))}
            </div> */}
        </main>
    );
};

export default Hero;
