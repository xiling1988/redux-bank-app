import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import store from "./store";
import withdrawMoney from "./actions";

class App extends Component {
  state = {
    username: "Janny",
    totalAmount: 2500701
  };

  dispatchWithdraw(e) {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawMoney(amount));
  }

  render() {
    const { totalAmount, username } = store.getState();

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={this.dispatchWithdraw}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={this.dispatchWithdraw}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" data-amount={totalAmount} onClick={this.dispatchWithdraw}>Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
