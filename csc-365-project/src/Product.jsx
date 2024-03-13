import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import ProductList from './ProductList'

const Product = () => {
    const [inputText, setInputText] = useState("");
    const [error, setError] = useState("")
    
    let inputHandler = (e) => {
        //check for errors in input text, then convert input text to lower case
        for (let i=0; i < e.target.value.length; i++) {
            if (!isNaN(+e.target.value[i]) && e.target.value[i] !== " ") {
                setError("Numeric input not allowed.")
            }
            else if (((e.target.value).charCodeAt(i) > 32 && (e.target.value).charCodeAt(i) < 48) || ((e.target.value).charCodeAt(i) > 57 && (e.target.value).charCodeAt(i) < 65)) {
                setError("Special characters not allowed.")
            } 
            else {
                setError("")
            }
        }
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
            {
                error === "" ? (
                    <ProductList input={inputText}/>
                ) : (
                    <p>{error}</p>
                )}
        </div>
    )
}

export default Product