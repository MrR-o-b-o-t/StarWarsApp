import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./components/Table"
// import Search from "./components/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from 'axios';

export default class App extends Component {
state = {
  swapiData: []
}
componentDidMount() {

  axios.get('https://swapi.dev/api/people/1/')
  .then(response => {
    this.setState({ ...response });
  })
  .catch(error => {
    console.log(error);
  });
}

render() {
  return (
    <div>
      <Header />
      <Table addNewData={this.state.swapiData} />
      {/* <Search swapiData={this.state.swapiData} /> */}
    </div>
  );
}
}

