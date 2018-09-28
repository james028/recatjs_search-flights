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

  handleFlights(searchParams) {
    this.setState({isLoading: true});
      searchFlights(searchParams)
        .then(airport => {
          this.setState({
              isLoading: false,
              searchParams,
              data: airport
          })
        });
  }

  handleReset() {
    this.setState({
      params: {
        from: null,
        to: null,
        departureDate: null,
        returnDate: null
      },
      data: null
    })
  }

  render() {
    return (
      <div className="App">
          <div>
            Search flights
          </div>
          {this.state.isLoading && (<span>Loading...</span>)}
          {this.state.isLoading === false &&  this.state.data === false && (
            <SearchForm 
              airports={this.state.data}
              params={this.state.params}
              Submit={this.handleFlights}
              reset={this.handleReset}
            />
          )}
          {this.state.isLoading === false && this.state.data && (
            <FlightList 
              airports={this.state.data}
              reset={this.handleReset}
            />
          )}
          <SearchForm />
      </div>
    );
  }         
}

export default App;
