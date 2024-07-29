// CardContainer.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './productcard'; // Adjust the path as needed

// Define a type for product data
interface Product {
    image: string;
    nameOfProduct: string;
    price: number;
    isLiked: boolean;
    quantity: number;
}

const CardContainer: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/v1/all");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.data);
                console.log(data)

                // Calculate total price
                
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleDeleteAll = () => {
        // Implement the logic to delete all products or clear state
        setProducts([]);
        setTotalPrice(0);
    };

    return (
        <section className="cardContainer">
            <div className="total-price">
                <span>Total price: </span>
                <span className="total">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="deleteAll" onClick={handleDeleteAll}>
                <i id="deleteAll" className="fas fa-trash-alt"></i>
                <span>Delete All Carts</span>
            </div>
            <div id="list-products" className="list-products">
                {products.map((product, index) => (
                    <ProductCard
                        key={index} // Ideally, use a unique identifier
                        image={product.image}
                        nameOfProduct={product.nameOfProduct}
                        price={product.price}
                        isLiked={product.isLiked}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardContainer;
