import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

const Product = () => {
    const [products, setProducts] = useState([])
    const [sorted, setSorted] = useState({sorted: "name", reversed: false})

    const sortByName = () => {
        setSorted({sorted: "name", reversed: !sorted.reversed});
        const productsCopy = [...products];
        productsCopy.sort((productA, productB) => {
            if(sorted.reversed) {
                return productA.product_name.localeCompare(productB.product_name);
            }
            return productB.product_name.localeCompare(productA.product_name);
        });
        setProducts(productsCopy);
    };

    const sortByPrice = () => {
        setSorted({sorted: "name", reversed: !sorted.reversed});
        const productsCopy = [...products];
        productsCopy.sort((productA, productB) => {
            if(sorted.reversed) {
                return productA.product_price - productB.product_price;
            }
            return productB.product_price - productA.product_price;
        });
        setProducts(productsCopy);
    };

    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/products")
                setProducts(res.data);
            }catch(err) {
                console.log(err);
            }
        }
        fetchAllProducts()
    }, [])
    return (
        <div>
            <h1>Products</h1>
            <div className="input-wrapper">
                <FaSearch id='search-icon'/>
                <input 
                type="text" 
                placeholder='Type to search...'/>
            </div>
            <div className="sortByName" onClick={sortByName}>Sort By Name</div>
            <div className="sortByPrice" onClick={sortByPrice}>Sort By Price</div>
            <div className='products'>
                {products.map(product=>(    
                    <div className='product'>
                        <h2>{product.product_name}</h2>
                        <p>Price: ${product.product_price}</p>
                        <p>In Stock: {product.in_stock}</p>
                        <p>Brand: {product.brand_name}</p>
                    </div>   
                ))}
            </div>
        </div>
    )
}

export default Product