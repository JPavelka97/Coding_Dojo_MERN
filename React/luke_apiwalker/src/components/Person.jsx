import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Person = () => {
    const [person, setPerson] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
            setPerson(response.data);
        }, [id]).catch( err => console.log(err));
    });

    return (
        <div>
            <h3>Name: {person.name}</h3>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    );
};

export default Person;
