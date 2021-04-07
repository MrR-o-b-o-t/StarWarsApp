import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table"
import Search from "./Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default class App extends Component {
  state = {
    myData: []
  }

  addData = moreData => {
    this.setState({
      myData: [moreData]
    })
  }

render() {
  return (
    <div>
      <Header />
      <Table addNewData={this.state} appState={this.state}/>
      <Search addData={this.addData} appState={this.state} />
    </div>
  );
}
}