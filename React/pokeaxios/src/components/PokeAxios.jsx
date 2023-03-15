import React, { useState } from "react";
import axios from "axios";

const PokeAxios = () => {
    const [pokemon, setPokemon] = useState([]);
    const fetchPoke = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
            .then((response) => {
                setPokemon(response.data.results);
            });
    };

    return (
        <div>
            <h3>All the Mons</h3>
            <button onClick={fetchPoke}>Fetch Pokemon</button>
            {pokemon.map((pokemon, index) => {
                return (<p key={index}>{pokemon.name}</p>)
            })}
        </div>
    );
};
export default PokeAxios;
