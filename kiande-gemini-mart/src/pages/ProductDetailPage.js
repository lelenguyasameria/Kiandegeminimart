// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div>
            <Header />
            {product && (
                <div className="product-detail">
                    <img src={product.image} alt={product.name} />
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailPage;
