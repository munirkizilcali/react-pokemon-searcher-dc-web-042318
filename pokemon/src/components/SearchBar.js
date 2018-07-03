import React from "react";

export const SearchBar = props => {
	return (
		<div>
			<input
				type="text"
				onChange={props.handleSearchBar}
				value={props.searchText}
			/>
		</div>
	);
};
