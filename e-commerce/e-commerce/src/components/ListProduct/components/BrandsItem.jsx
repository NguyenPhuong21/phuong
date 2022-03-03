import React,{useState, useEffect, useRef }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

const BrandsItem =(props) =>{
    // const [isSearch, setSearch] = useState(false);
    const [input, setInput] = useState('');
    const [checkBox, setCheckBox] = useState([]);
    const inputRef = useRef(null);
    const a = [
        { name:'Insigia',qty:5},
        { name:'Samsung',qty:5},
        { name:'Metra',qty:5},
        { name:'HP',qty:5},
        { name:'Apple',qty:5}

    ] ;
    
  useEffect(() => {
    inputRef.current.focus();
  },[]);
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  }
  const handleCheckbox = e => {     
     setCheckBox(e.target.value);
  }
 
  return (
    <div>
         <div className='brands-search'>
            <input
                placeholder='Search a product'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
            />
            <button onClick={handleSubmit} className='brands-btn-checkBox'>
            <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className='brands-checkBox'>
              {a.map((el,index)=>{
                   return  (
                    <div key={index}>
                        <input type='checkbox' onChange={handleCheckbox} />
                        <Link to={`${el.name}`}>{el.name}</Link>
                        
                        <span className='facet-count'/>{el.qty}<br/>
                    </div>
                   );
              })}

          </div>
    </div>
  )
}

export default BrandsItem