import React from "react";
import { FuturePlansCard } from "./future-plans-card";

const FUTURE_PLANS = [
    {
        title: "Nationwide Reach",
        desc: "We aim to supply medicines to every home in India, ensuring that no one is left behind when it comes to their health. Our goal is to make healthcare accessible to everyone, regardless of their location.",
        image: "https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775594/MEDICINE_rhqafz.jpg",
    },
    {
        title: "Affordable Healthcare for All",
        desc: "We are committed to lowering the cost of medicines. In the near future, we plan to offer up to 80% discounts on medicines, making healthcare even more affordable.",
        image: "https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775595/HOSPITAL_fcnick.jpg",
    },
    {
        title: "Reducing Medicine Prices",
        desc: "We're focused on driving down the cost of medicines, so you don't have to worry about the financial burden of your health. Our goal is to make healthcare more accessible and affordable for everyone.",
        image: "https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775594/HEART_fz0gga.jpg",
    },
    {
        title: "Global Expansion",
        desc: "While we're starting with India, our vision is to expand our services worldwide. We want to be your trusted medicine's delivery partner no matter where you live.",
        image: "https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775833/DOCTOR_hxgmm9.png",
    },
];

export const FuturePlans = () => {
    return (
        <section className="flex justify-center items-center flex-col w-full px-2 md:px-12 xl:px-44 my-8">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#1e6460] uppercase">
                Our Future Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
                {FUTURE_PLANS.map((item, idx) => (
                    <FuturePlansCard key={idx} {...item} />
                ))}
            </div>
        </section>
    );
};
