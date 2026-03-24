import React from 'react'
import './main.css';

const Cart = () => {
  return (
    <div className='cart-page'>
        <div className="new-cart-title">
            <h1>Hungry? Almost There!</h1>
            <p>You’ve got great taste! Check your selections, add more if you like, and place your order for a meal you’ll love.</p>
        </div>
        <table>
            <tr>
                <th>Sr.No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Total Amount</th>
            </tr>
            <tr>
                <td>1</td>
                <td><img src="https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg" alt="" /></td>
                <td>Panir Tika</td>
                <td>299</td>
                <td><button>+</button><span>1</span><button>-</button></td>
                <td>299</td>
            </tr>
        </table>
        <div className="btn-container">
            <button>Grand Total</button>
            <button className='btn-1'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart