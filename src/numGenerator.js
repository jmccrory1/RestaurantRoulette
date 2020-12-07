import React, { Component } from 'react';
import './App.css';

export class NumGenerator extends Component {
  constructor() {
      super();
      this.state = {
        NumberHolder : 1, 
        RestaurantHolder: "?"
      }
    }

  generateNumber = () => {

    var RandomNumber = Math.floor(Math.random() * 10)+1;
    
    var restaurant="";

    if (RandomNumber === 1) {
      restaurant = "Italian";
    }
    if (RandomNumber === 2) {
      restaurant = "Mexican";
    }
    if (RandomNumber === 3) {
      restaurant = "Chinese";
    }
    if (RandomNumber === 4) {
      restaurant = "Japanese";
    }
    if (RandomNumber === 5) {
      restaurant = "American";
    }
    if (RandomNumber === 6) {
      restaurant = "Greek";
    }
    if (RandomNumber === 7) {
      restaurant = "Cajun"
    }
    if (RandomNumber === 8) {
      restaurant = "Barbecue";
    }
    if (RandomNumber === 9) {
      restaurant = "Seafood";
    }
    if (RandomNumber === 10) {
      restaurant = "Breakfast";
    }

    this.setState({
      RestaurantHolder : restaurant
    })
  }
   
render() {
  return (
    <div id="generator">
      <div className="card" style={{ width: `18rem` }}>
        <div className="card-body">
          <h5 className="card-title">What's for dinner?</h5>
          <h6 className="card-subtitle mb-2 text-muted">press "pick a Category" below to generate a food category</h6>
          <p className="card-text"></p>
          <p> {this.state.RestaurantHolder} </p>
          <button className="btn" type="submit" onClick={this.generateNumber}>Pick a Category</button>
        </div>
      </div>
    </div>
  );
 }
}

export default NumGenerator;
