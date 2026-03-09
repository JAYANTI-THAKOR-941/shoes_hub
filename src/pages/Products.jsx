import React from 'react'

const Products = () => {


  const products = JSON.parse(localStorage.getItem('products'));

  return (
    <div>
      <h1>Explore Our Products</h1>
      {
        !products ? <h2>Product Not Found.!!</h2> : <>
          {
            products.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt="" />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>{p.price}</p>
                <button>View Details</button>
              </div>
            ))
          }
        </>
      }
    </div>
  )
}

export default Products