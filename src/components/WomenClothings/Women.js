import React, { useState } from 'react';
import Fproduct from './Fproduct';
import data2 from '../../data2';

export default function Main(props) {
  const { onAdd } = props;
    const [filter, setFilter] = useState('');
    
    const searchText = (event) => {
      setFilter(event.target.value);
    }
    let dataSearch = data2.products.filter(item => {
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

  return (
   
    <main>
<div>
  <h1 className='title-category'>Women Clothings</h1>
    <div className='filter-products'>
  <label className='form-lable h3'>Filter</label>
  <input 
  className='form-control' 
  placeholder='Women Product Name'
  type="text"
  value={filter}
  onChange={searchText.bind(this)}
  />
  </div>
        {dataSearch.map((product) => (
          <Fproduct key={product.id} product={product} onAdd={onAdd}></Fproduct>
        ))}
      </div>
    </main>
          
  );
        
}