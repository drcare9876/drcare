import React from "react";
import { MissionCard } from "./mission-card";
import { Store, Truck } from "lucide-react";

export const Mission = () => {
    return (
        <section className="flex justify-center items-center flex-col w-full px-2 md:px-12 xl:px-44">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#1e6460] uppercase">
                Our Mission
            </h2>
            <div className="flex gap-4 flex-col xl:flex-row">
                <MissionCard
                    title={"Free Delivery, Every Time"}
                    desc={
                        " We believe that access to medicine should never be a burden. That's why we offer free delivery of medicines to your home, so you can focus on your health without worrying about additional costs."
                    }
                    Icon={Truck}
                />
                <MissionCard
                    title={"Expanding Access Across India"}
                    desc={
                        "Our goal is to make sure every household in India has access to the medications they need. We're working towards reaching every corner of the country, ensuring that healthcare is available to all."
                    }
                    Icon={Store}
                />
            </div>
        </section>
    );
};
