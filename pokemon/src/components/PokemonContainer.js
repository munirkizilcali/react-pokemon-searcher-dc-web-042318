import React from "react";
import { PokemonList } from "./PokemonList";
import { SearchBar } from "./SearchBar";
import { pokemon } from "../lib/data";

export default class PokemonContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ""
		};
		this.handleSearchBar = this.handleSearchBar.bind(this);
	}

	handleSearchBar(e) {
		this.setState({ searchText: e.target.value });
	}

	filter() {
		if (this.state.searchText !== "") {
			return pokemon.pokemons.filter(pokemon => {
				return pokemon.name
					.toLowerCase()
					.includes(this.state.searchText);
			});
		} else {
			return [];
		}
	}

	render() {
		return (
			<div>
				<SearchBar
					searchText={this.state.searchText}
					handleSearchBar={this.handleSearchBar}
				/>
				<PokemonList pokemonList={this.filter()} />
			</div>
		);
	}
}
