import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Skeleton from "@mui/material/Skeleton"; // Import MUI Skeleton
import ProductDetailsModal from "../Modals/ProductDetailsModal";
import { Info, ShoppingCart } from "lucide-react";

export const ProductCard = ({ product, handleAddToCart }) => {
    const { name, mrp, brand, image, description, tags } = product;
    const [modalOpen, setModalOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false); // Track image load status
    const discountedPrice = (mrp * 0.79).toFixed(2); // Reducing 21% from MRP

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    console.log("Image: ", image);

    const productDetails = {
        name,
        mrp,
        brand,
        image,
        description,
        tags,
    };

    return (
        <Card className="w-full md:w-[300px] border outline-none shadow-md rounded-md p-4">
            <CardHeader className="flex justify-between mb-2">
                <Badge
                    variant={"outline"}
                    className={
                        "bg-emerald-100/50 rounded-sm text-xs text-emerald-400"
                    }
                >
                    {tags[0]}
                </Badge>
                <Button
                    variant="outline"
                    size="icon"
                    className="size-8"
                    onClick={handleModalOpen}
                >
                    <Info className="size-4" />
                </Button>
            </CardHeader>
            <CardContent className="h-48 w-full object-cover overflow-hidden rounded-md">
                {/* Show Skeleton while the image is loading */}
                {!imageLoaded && (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        animation="wave"
                        className="rounded-md"
                    />
                )}
                <img
                    src={image}
                    className={`h-full w-full object-cover rounded-md `}
                    alt={name}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)} // Update state when image loads
                    onError={() => setImageLoaded(true)} // Handle error case
                />
            </CardContent>
            <CardHeader className="flex flex-col justify-between my-2">
                <CardTitle className="text-lg font-semibold line-clamp-1 tracking-tight space-x-0 leading-normal">
                    {name}
                </CardTitle>
                <CardDescription>{brand}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between my-2"></CardFooter>
            <CardFooter className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <h3
                        className="text-2xl font-semibold text-primary"
                        style={{ color: "#1e6460" }}
                    >
                        ₹{discountedPrice}
                    </h3>
                    <h5 className="text-base font-semibold text-gray-500 line-through">
                        ₹{mrp}
                    </h5>
                </div>
                <Button
                    variant="default"
                    size="sm"
                    onClick={handleAddToCart}
                    style={{ backgroundColor: "#1e6460" }}
                >
                    <ShoppingCart className="size-4 mr-1" />
                    Add to cart
                </Button>
            </CardFooter>
            <ProductDetailsModal
                open={modalOpen}
                onClose={handleModalClose}
                product={productDetails}
            />
        </Card>
    );
};
