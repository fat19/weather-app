import React, { Component } from 'react';
import SearchBar from '../containers/searh_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
      </div>
    );
  }
}
