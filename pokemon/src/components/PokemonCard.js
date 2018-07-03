import React from "react";

export default class PokemonCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardFace: true
		};
		this.changeFace = this.changeFace.bind(this);
	}

	changeFace() {
		this.setState({
			cardFace: !this.state.cardFace
		});
	}

	render() {
		return (
			<div className="pokemon-container">
				<div
					Style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
					className="pokemon-frame"
				>
					<h1 className="center-text">{this.props.pokemon.name}</h1>
					<div Style="width:239px;margin:auto">
						<div Style="width:96px;margin:auto">
							<img
								src={
									this.state.cardFace === true
										? this.props.pokemon.sprites.front
										: this.props.pokemon.sprites.back
								}
								alt={this.props.pokemon.name}
							/>
						</div>
					</div>
					<p
						Style="padding:10px;"
						className="center-text flip-image"
						data-pokename={this.props.pokemon.name}
						onClick={this.changeFace}
					>
						flip card
					</p>
				</div>
			</div>
		);
	}
}
