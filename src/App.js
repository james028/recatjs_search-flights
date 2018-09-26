import React, { Component } from 'react';
import './App.css';
import { readAirportList, searchFlights } from './api';
import SearchForm from './searchform'
import FlightList from './flightlist'



class App extends Component {

  state = {
    isLoading: true,
    data: [],
    params: null,
    flights: null
  };

  componentDidMount() {
      this.setState({isLoading: true})
      readAirportList()
        .then(air => {
            this.setState({
              data: air,
              isLoading: false
            })
        });
  }

  handleFlights() {

  }

  handleReset() {
    
  }

  render() {
    return (
      <div className="App">
          <div>
            Search flights
          </div>
          {this.state.isLoading && (<span>Loading...</span>)}
          {this.state.isLoading === false &&  this.state.data === false && (
            <SearchForm />
          )}
          {this.state.isLoading === false && this.state.data && (
            <div>a</div>
          )}
          {this.state.data.map((e,i) => {
            return <div key={i}>{e.city}</div>
          })}
      </div>
    );
  }         
}

export default App;
