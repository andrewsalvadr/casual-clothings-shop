import React from 'react';



export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.12;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
<aside className="block col-12">
  <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div className='cart-item-added'>
          <div key={item.id} className="row">
            <div className='col-7'>
            <img src={item.image} className="product-image-cart"/> {item.name}
            </div>
            <div className="col-2">
              <div className='cart-qty-btn'>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              </div>
              </div>
   
            <div className="col-1">
              {item.qty} 
            </div>
            <div className="col-2">
              ${item.price.toFixed(2)}
            </div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className='cart-breakdown'>
            <div className="row">
              <div className="col-6">Items Price</div>
              <div className="col-6 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-6">Tax Price</div>
              <div className="col-6 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-6">Shipping Price</div>
              <div className="col-6 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <strong>Total Price</strong>
              </div>
              <div className="col-6 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="cart-checkout" onClick={() => alert('Thank you for shopping!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}