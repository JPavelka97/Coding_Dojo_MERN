import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
export default () => {
    const [message,setMessage] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            <PersonForm/>
        </div>
    )
}