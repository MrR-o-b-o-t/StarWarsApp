import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    myData: [],
    isTrue: [],
  };

  addData = (moreData) => {
    this.setState({
      myData: [moreData],
    });
  };

  isTrue = (toggle) => {
    this.setState({
      isTrue: [toggle],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Table
          addData={this.addData}
          appState={this.state}
          toggleData={this.isTrue}
        />
        <Search
          addData={this.addData}
          appState={this.state}
          toggleData={this.isTrue}
        />
      </div>
    );
  }
}
