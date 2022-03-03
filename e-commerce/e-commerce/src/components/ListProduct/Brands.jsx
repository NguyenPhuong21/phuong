import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BrandsItem from "./components/BrandsItem";
function Brands() {
  return (
    <div className='container'>
      <div className='brands'>
        <h3>Brands</h3>
      </div>
      <div className='brands-search'>
          <BrandsItem/>
          </div>
    </div>
  );
}

export default Brands
