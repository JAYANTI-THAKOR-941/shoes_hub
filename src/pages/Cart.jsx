import React from 'react'
import './main.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementQty, incrementQty, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const cartItems = useSelector(state=>state.cart.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const total = cartItems.reduce((sum,item)=>{
        return sum + (item.qty * item.price);
    },0)

  return (
    <div className='cart-page'>
        <div className="new-cart-title">
            <h1>Hungry? Almost There!</h1>
            <p>You’ve got great taste! Check your selections, add more if you like, and place your order for a meal you’ll love.</p>
        </div>
        <button className='cta-btn' onClick={()=>navigate('/products')}>Continue</button>
        <table>
            <tr>
                <th>Sr.No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Total Amount</th>
                <th>Remove Item</th>
            </tr>
            {
                cartItems.length === 0 ?(
                    <tr><td colSpan="6">Your cart is empty.!!</td></tr>
                ):
                cartItems.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><img src={item.image} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><button onClick={()=>dispatch(incrementQty(item.id))} style={{backgroundColor:'green'}}>+</button> <span>{item.qty}</span><button onClick={()=>dispatch(decrementQty(item.id))}>-</button></td>
                        <td>{item.price * item.qty}</td>
                        <td><button onClick={()=>dispatch(removeFromCart(item.id))} style={{backgroundColor:'red'}} >Remove Item</button></td>
                    </tr>
                ))
            }
        </table>
        <h3 className='total'>Total : {total}</h3>
        <div className="btn-container">
            <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
            <button className='btn-1'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart