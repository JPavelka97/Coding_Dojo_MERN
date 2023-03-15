import React, {useState} from "react";

const PokeDisplay = () => {
    const [pokemon, setPokemon] = useState([])
    const fetchPoke = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            setPokemon(response.results)
        })
    }

    return (
        <div>
            <h3>All the Mons</h3>
            <button onClick={fetchPoke}>Fetch Pokemon</button>
            {pokemon.map((pokemon, index) => {
                return(
                    <p key={index}>{pokemon.name}</p>
                )
            })}
        </div>
    )
}
export default PokeDisplay