import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const navigate = useNavigate();

  // const products = JSON.parse(localStorage.getItem('products'));

  const [products, setProducts] = useState(() => {
    const allProducts = localStorage.getItem('products');
    return allProducts ? JSON.parse(allProducts) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filterdProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all' ? true : p.category.toLowerCase() === category;
    return matchSearch && matchCategory;
  })


  return (
    <div>
      <div className="heading">
        <h1>Step Into Style with ShoesHub</h1>
        <p>Discover the perfect blend of comfort, durability, and modern design. ShoesHub brings you premium footwear crafted to support every step of your journey—whether you're heading to work, the gym, or a night out.</p>
      </div>
      <div className="filter-container">
        <input type="text" placeholder='Search products' onChange={(e) => setSearch(e.target.value)} />

        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="sneakers">Sneakers</option>
          <option value="formal">Formal</option>
          <option value="sports">Sports</option>
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
                  <p>Price : ₹{p.price}</p>
                  <button className='cart-btn' onClick={() => navigate(`/product/${p.id}`)}>View Details</button>
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