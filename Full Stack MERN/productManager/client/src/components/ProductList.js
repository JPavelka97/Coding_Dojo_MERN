import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {props.productsList.map((product, idx) => 
                <Link to={`/products/${product._id}`} key={idx}>{product.title} | {product.price} | {product.description}</Link>
                )}
            </ul>
        </div>
    )
}

export default ProductList