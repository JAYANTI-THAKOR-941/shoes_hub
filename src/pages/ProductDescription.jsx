import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './main.css';

const ProductDescription = () => {
    
    const {id} = useParams();

    const [product,setProduct] = useState(null);
    const [error,setError] = useState('');

    useEffect(()=>{
        const products = localStorage.getItem('products');
        if(products){
            const productArray = JSON.parse(products);

            const foundProduct = productArray.find((p)=> p.id == id);

            if(foundProduct){
                setProduct(foundProduct);
                setError("");
            }
            else{
                setError("Product not found.!!");
            }
        }
        else{
            setError("Not data in localstorage.!!");
        }
    },[id])



if(!product) return <h2>Product not found.!!</h2>;
if(error) return <h2>{error}</h2>

  return (
    <div className='product-description'>
        <div className="product-image">
            <img src={product.image} alt="" />
        </div>
        <div className="product-info">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.longDescription}</p>
            <p>Price:₹{product.price}</p>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDescription