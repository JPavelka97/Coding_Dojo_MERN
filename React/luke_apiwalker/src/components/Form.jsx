import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [topic, setTopic] = useState('people')
    const [id, setId] = useState('1')
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${topic}/${id}`)
    }
    
    return (
        <div>
            <form>
                <select onChange={(e) => setTopic(e.target.value)} name="topic_select" id="">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input min='1' type="num" onChange={((e) => setId(e.target.value))}/>
                <button onClick={handleSubmit}>Retrieve Information!</button>
            </form>
        </div>
    )
}

export default Form