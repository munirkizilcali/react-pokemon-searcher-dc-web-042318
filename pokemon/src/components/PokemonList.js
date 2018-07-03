import React from "react";
import PokemonCard from "./PokemonCard";

export const PokemonList = props => {
	return (
		<div>
			{props.pokemonList.map(pokemon => {
				return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
			})}
		</div>
	);
};
