import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
    const [products, setProducts] = useState([])

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