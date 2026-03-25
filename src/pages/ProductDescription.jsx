import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './main.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDescription = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        const products = localStorage.getItem('foodProducts');
        if (products) {
            const productArray = JSON.parse(products);

            const foundProduct = productArray.find((p) => p.id == id);

            if (foundProduct) {
                setProduct(foundProduct);
                setError("");
            }
            else {
                setError("Product not found.!!");
            }
        }
        else {
            setError("Not data in localstorage.!!");
        }
    }, [id])



    if (!product) return <h2>Product not found.!!</h2>;
    if (error) return <h2>{error}</h2>

    return (
        <>
        <div className="title-hero">
            <h1>Taste the Authentic Punjabi Greens</h1>
            <p>Relish the traditional flavors of Punjab with Sarson da Saag. This hearty dish combines fresh mustard greens and spices, slow-cooked to perfection and topped with butter. Best enjoyed with Makki di Roti, it’s a comforting meal full of flavor and nostalgia.</p>
        </div>
            <div className='product-description'>
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.longDescription}</p>
                <p><b>Category: </b>{product.category}</p>
                <p><b>Price: ₹</b>{product.price}</p>
                <button className='cart-btn' onClick={()=>{
                    dispatch(addToCart(product));
                    navigate('/cart');
                }}>Add to Cart</button>
            </div>
        </div>
        </>
    )
}

export default ProductDescription