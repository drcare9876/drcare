import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export const FuturePlansCard = ({ title, desc, image }) => {
    return (
        <Card className="p-4 border rounded-md flex flex-col xl:flex-row items-center justify-center gap-2 w-full">
            <img
                src={image}
                alt={title}
                className="size-full md:size-32 object-cover rounded-md"
            />
            <CardHeader className="flex flex-col justify-center items-center xl:items-start">
                <CardTitle className="text-[#1e6460] text-xl font-bold">
                    {title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 text-center xl:text-left">
                    {desc}
                </CardDescription>
            </CardHeader>
        </Card>
    );
};
