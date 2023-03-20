import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const DashboardPage = () => {
    const [ productsList, setProductsList ] = useState()
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        console.log('banana')
        axios.get("http://localhost:8000/api/products")
            .then(res => setProductsList(res.data.products))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <ProductForm />
            <hr/>
            <div>
            {productsList && <ProductList productsList={productsList}/>}
            </div>
        </div>
    )
}

export default DashboardPage;