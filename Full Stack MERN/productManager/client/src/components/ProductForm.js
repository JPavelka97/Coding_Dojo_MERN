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
        <form onSubmit={onSubmitHandler} class="w-25 mx-auto mt-3">
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingTitle" placeholder="Bananas" onChange={(e) => setTitle(e.target.value)} value={title} />
                <label for="floatingTitle">Title</label><br/>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPrice" placeholder="5.32" onChange={(e) => setPrice(e.target.value)} value={price} />
                <label for="floatingPrice">Price</label><br/>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingDescription" placeholder="5.32" onChange={(e) => setDescription(e.target.value)} value={description} />
                <label for="floatingDescription">Price</label><br/>
            </div>
            <input type="submit" />
        </form>
    )
}

export default ProductForm