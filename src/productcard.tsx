// ProductCard.tsx
import React from 'react';
import CardBody from './cardbody'; // Import CardBody
import './App.css'; // Ensure this file contains styles relevant to ProductCard

// Define props for ProductCard
interface ShowCardProps {
    image: string;
    nameOfProduct: string;
    price: number;
    isLiked: boolean;
    quantity: number;
}

// Define ProductCard component
const ProductCard: React.FC<ShowCardProps> = ({ image, nameOfProduct, price, isLiked, quantity }) => {
    return (
        <div className="carditem">
            <img src={image} alt={nameOfProduct} className="card-image" />
            <CardBody 
                nameOfProduct={nameOfProduct}
                price={price}
                isLiked={isLiked}
                quantity={quantity}
            />
        </div>
    );
};

export default ProductCard;
