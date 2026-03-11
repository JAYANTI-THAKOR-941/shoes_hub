import React from 'react'

const Products = () => {


  const products = JSON.parse(localStorage.getItem('products'));

  return (
    <div>
     <div className="heading">
       <h1>Step Into Style with ShoesHub</h1>
      <p>Discover the perfect blend of comfort, durability, and modern design. ShoesHub brings you premium footwear crafted to support every step of your journey—whether you're heading to work, the gym, or a night out.</p>
     </div>
      <div className="product-container">
        {
        !products ? <h2>Product Not Found.!!</h2> : <>
          {
            products.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt="" />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>Price : ₹{p.price}</p>
                <button>View Details</button>
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