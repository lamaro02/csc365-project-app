import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import ProductList from './ProductList'

const Product = () => {
    const [inputText, setInputText] = useState("");
    
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div>
            <h1>Products</h1>
            <div className="input-wrapper">
                <FaSearch id='search-icon'/>
                <input 
                type="text" 
                placeholder='Search a product by name...'
                onChange={inputHandler}
                value={inputText}/>
            </div>
            <ProductList input={inputText}/>
        </div>
    )
}

export default Product