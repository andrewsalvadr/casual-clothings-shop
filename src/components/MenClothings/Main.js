import React, { useState } from 'react';
import Product from './Product';
import data from '../../data';

export default function Main(props) {
  const { onAdd } = props;
    const [filter, setFilter] = useState('');
    
    const searchText = (event) => {
      setFilter(event.target.value);
    }
    let dataSearch = data.products.filter(item => {
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

  return (
   
    <main>
<div>
  <h1 className='title-category'>Men Clothings</h1>
    <div className='filter-products'>
  <label className='form-lable h3'>Filter</label>
  <input 
  className='form-control' 
  placeholder='Men Product Name'
  type="text"
  value={filter}
  onChange={searchText.bind(this)}
  />
  </div>
        {dataSearch.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
          
  );
        
}