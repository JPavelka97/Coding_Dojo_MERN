import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const DashboardPage = () => {
    const [ productsList, setProductsList ] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProductsList(res.data.products))
            .catch(err => console.error(err))
    }, [])

    const removeFromDom = id => {
        setProductsList(productsList.filter(product => product._id !== id))
    }

    return (
        <div>
            <h1>Submit New Product</h1>
            <ProductForm />
            <hr/>
            <div>
            {productsList && <ProductList productsList={productsList} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}

export default DashboardPage;