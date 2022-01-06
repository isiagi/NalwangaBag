import React, { useContext } from 'react';
import './cart.css';
// import img from '../../images/1.jpg';
import { BagContext } from '../../context/Context';

const Cart = () => {
  const { cart, onIncrease, onDecrease, onRemove } = useContext(BagContext);

  const totalPrice = cart.reduce((a: any, b: any) => a + b.qty * b.price, 0);

  // alert(cart)
  return (
    <div className="cart__wrapper">
      <div className="cart__footz">
        <p>Continue Shopping</p>
        <button>Proceed To Checkout</button>
      </div>
      {cart.map((cart: any) => (
        <div className="cart__items">
          <div className="cart__item">
            <img src={cart.image && cart.image} alt="" width="150" />
            <div>
              <p>Elegant Bag shop</p>
              <button onClick={() => onIncrease(cart)}>+</button>
              <p className="cart__count">{cart.qty && cart.qty}</p>
              <button onClick={() => onDecrease(cart)}>-</button>
            </div>
          </div>
          <div className="cart__item1">
            <p>Shs {cart.price && cart.price * cart.qty}</p>
            <button
              onClick={() => onRemove(cart)}
              style={{
                marginTop: '15px',
                padding: '5px',
                backgroundColor: '#eb313b',
                outline: 'none',
                border: 'none',
                color: 'white',
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart__foot">
        <p>Continue Shopping</p>
        <div>
          <p>Total: ${totalPrice}</p>
          <button>Proceed To Checkout(1 item)</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
