import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export const MissionCard = ({ title, desc, Icon }) => {
    return (
        <Card className="p-4 border rounded-md flex flex-col xl:flex-row items-center justify-center gap-2 w-full xl:w-1/2">
            <div className="flex justify-center items-center size-50 p-8 border rounded-full text-[#1e6460]">
                <Icon size={50} />
            </div>
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
