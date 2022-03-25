import React, { useState } from 'react';
import data3 from '../../data3';
import Kproduct from './Kproduct';


export default function Main(props) {
  const { onAdd } = props;
    const [filter, setFilter] = useState('');
    
    const searchText = (event) => {
      setFilter(event.target.value);
    }
    let dataSearch = data3.products.filter(item => {
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

  return (
   
    <main>
<div>
  <h1 className='title-category'>For Kids</h1>
    <div className='filter-products'>
  <label className='form-lable h3'>Filter</label>
  <input 
  className='form-control' 
  placeholder='Kids Product Name'
  type="text"
  value={filter}
  onChange={searchText.bind(this)}
  />
  </div>
        {dataSearch.map((product) => (
          <Kproduct key={product.id} product={product} onAdd={onAdd}></Kproduct>
        ))}
      </div>
    </main>
          
  );
        
}