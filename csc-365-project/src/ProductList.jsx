import React from "react"
import { useEffect, useState } from 'react'
import axios from 'axios'

function Products_List(props) {
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

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products")
                setProducts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchAllProducts()
    }, [props.byName])

    const filteredData = products.filter((el) => {
        if (props.input === '') return el
        else return el.product_name.toLowerCase().includes(props.input)
    })

    return (
        <div>
            { filteredData.length === 0 ? (
               <p>No products found. Please try a different search.</p> // no matches were found, so alert user to try a different search
            ) : (
                <div>
                    <div className="sort" onClick={sortByName}>Sort By Name</div>
                    <div className="sort" onClick={sortByPrice}>Sort By Price</div>
                    <div className='products'>
                    {filteredData.map(product=>(    
                        <div className='product' key={product.product_id}>
                        <h2>{product.product_name}</h2>
                        <p>Price: ${product.product_price}</p>
                        <p>In Stock: {product.in_stock}</p>
                        {/* <p>Brand: {product.brand_name}</p> */}
                        </div>   
                ))}
            </div>
            </div>
            )
        }
        </div>
    )
}

export default Products_List