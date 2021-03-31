import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table"
// import Search from "./components/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default class App extends Component {

render() {
  return (
    <div>
      <Header />
      <Table addNewData={this.state} />
      {/* <Search swapiData={this.state.swapiData} /> */}
    </div>
  );
}
}
