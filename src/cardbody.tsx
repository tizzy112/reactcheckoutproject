// CardBody.tsx
import React from 'react';
import './App.css'; // Ensure this file contains styles relevant to CardBody

// Define props for CardBody
interface CardBodyProps {
    nameOfProduct: string;
    price: number;
    isLiked: boolean;
    quantity: number;
}

// Define CardBody component
const CardBody: React.FC<CardBodyProps> = ({ nameOfProduct, price, isLiked, quantity }) => {
    return (
        <div className="card-details">
            <h2 className="card-name">{nameOfProduct}</h2>
            <p className="card-price">${price?.toFixed(2)}</p>
            <p className="card-quantity">Quantity: {quantity}</p>
            <p className="card-liked">{isLiked ? '❤️ Liked' : '♡ Not Liked'}</p>
        </div>
    );
};

export default CardBody;
