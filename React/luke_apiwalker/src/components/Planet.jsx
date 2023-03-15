import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planet = () => {
    const [planet, setPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        population: "",
    });
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then(
                (response) => {
                    setPlanet(response.data);
                },
                [id]
            )
            .catch((err) => console.log(err));
    });

    return (
        <div>
            <h3>Name: {planet.name}</h3>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
};

export default Planet;
