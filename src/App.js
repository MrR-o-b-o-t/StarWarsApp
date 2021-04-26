import React, { Component } from "react";
import axios from "axios";
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

  componentDidMount() {
    const getData = async () => {
    await axios.get("https://swapi.dev/api/people/")
    .then((response) => {
      const myData = response.data.results;
      this.setState({ myData });
    });
  }
  getData()
}

  addData = (moreData) => {
    axios.get(moreData.api).then((response) => {
      const myData = response.data.results;
      this.setState({
        myData
      });
    });
  };

  isTrue = (toggle) => {
    this.setState({
      isTrue: [toggle],
    });
  };

  render() {
    const something = 1;
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
