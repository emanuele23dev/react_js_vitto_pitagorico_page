import Navbar from "./components/navbar";
import Card from "./components/card";
import React, { Component } from "react";

import antipasto from "./images/antipasto.jpg";
import primo from "./images/primo.jpg";
import dolce from "./images/dolce.jpg";

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: "Antipasto", prezzo: 12.9, immagine: antipasto, quantità: 0},
      { id: 1, nome: "Primo", prezzo: 14.0, immagine: primo, quantità: 0},
      { id: 2, nome: "Doloce", prezzo: 7.0, immagine: dolce, quantità: 0},
      { id: 0, nome: "Antipasto", prezzo: 12.9, immagine: antipasto, quantità: 0},
      { id: 1, nome: "Primo", prezzo: 14.0, immagine: primo, quantità: 0},
      { id: 2, nome: "Doloce", prezzo: 7.0, immagine: dolce, quantità: 0}
    ],
  };

  handleDelete = cardId => {
    const updatedCards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards: updatedCards});
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità++;
    this.setState({ cards: cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <h1 className="text-center mt-5">Choose your Vegan meal</h1>
        <div className="container d-flex mt-5">
          <div className="row">
            <hr />

            {this.state.cards.map((card) => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
