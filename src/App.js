import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';


export class Business extends React.Component {
  render() {
      return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.imageSrc} alt=''/>
        </div>
        <h2>MarginOtto Pizzeria</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.address}</p>
            <p>{this.props.city}</p>
            <p>{this.props.state}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.category}</h3>
            <h3 className="rating">{this.props.rating}</h3>
            <p>{this.props.reviewCount} reviews</p>
          </div>
        </div>
      </div>
      )
  }  
}

export const businesses = [
  <Business />,
  <Business /> ,
  <Business /> ,
  <Business /> ,
  <Business /> ,
  <Business />
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
        
      </div>
    );
  }
}

export default App;
