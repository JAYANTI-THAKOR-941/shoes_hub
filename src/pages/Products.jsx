import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const navigate = useNavigate();

  // const products = JSON.parse(localStorage.getItem('products'));

  const [products, setProducts] = useState(() => {
    const allProducts = localStorage.getItem('foodProducts');
    return allProducts ? JSON.parse(allProducts) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filterdProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all' ? true : p.category === category;
    return matchSearch && matchCategory;
  })


  return (
    <div>
      <div className="heading">
        <h1>Street-Style Taste, Premium Quality</h1>
        <p>Experience the rich taste of smoky paneer infused with authentic Indian spices — a dish crafted to delight every bite.</p>
      </div>
      <div className="filter-container">
        <input type="text" placeholder='Search products' onChange={(e) => setSearch(e.target.value)} />

        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          {[...new Set(filterdProducts?.map(p=>p.category))].map((category,index)=>(
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-container">
        {
          !filterdProducts ? <h2>Product Not Found.!!</h2> : <>
            {
              filterdProducts.map((p) => (
                <div className="product-card" key={p.id}>
                  <img src={p.image} alt="" />
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <p>{p.category}</p>
                 <div className="bottom">
                   <p>Price : ₹{p.price}</p>
                 <div className="btn-div">
                   <button className='cart-btn' onClick={() => navigate(`/product/${p.id}`)}>View Details</button>
                 </div>
                 </div>
                </div>
              ))
            }
          </>
        }
      </div>
    </div>
  )
}

export default Products