import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title, price, description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler} className="w-25 mx-auto mt-3">
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingTitle" placeholder="Bananas" onChange={(e) => setTitle(e.target.value)} value={title} />
                <label>Title</label><br/>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingPrice" placeholder="5.32" onChange={(e) => setPrice(e.target.value)} value={price} />
                <label>Price</label><br/>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingDescription" placeholder="5.32" onChange={(e) => setDescription(e.target.value)} value={description} />
                <label>Price</label><br/>
            </div>
            <input type="submit" />
        </form>
    )
}

export default ProductForm