import React from 'react';


export default function KProduct(props) {
  const { product, onAdd } = props;

  return (


<div className="container-list">

      <div>
      <img src={product.image} className="product-image-kids" alt={product.name} />
      <div className='namebtn'>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
        <button className='add-cart-btn' onClick={() => onAdd(product)}>Add To Cart</button>

        </div>

        </div>

        </div>

  );
}
