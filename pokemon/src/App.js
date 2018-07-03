import React, { Component } from "react";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonContainer />
      </div>
    );
  }
}

export default App;
