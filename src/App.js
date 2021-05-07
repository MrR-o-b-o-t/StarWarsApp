import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    myData: [],
    isTrue: [],
    page: 1,
    url: "https://swapi.dev/api/people/?page=",
  };

  componentDidMount() {
    const getData = async () => {
      await axios.get(this.state.url + this.state.page).then((response) => {
        const myData = response.data.results;
        this.setState({ myData });
      });
    };
    getData();
  }

  componentDidUpdate() {
    if (this.state.isTrue[0] === true) {
      try {
        const userSearch = this.state.myData[0].api;
        axios.get(userSearch).then((response) => {
          const myData = response.data.results;
          this.setState({ myData });
          this.state.isTrue = false;
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  addData = async (moreData) => {
    try {
      const searchReturn = await axios.get(moreData.api);
      const myData = searchReturn.data.results;
      this.setState({
        myData,
      });
    } catch (err) {
      console.log(err);
    }
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
        <Pagination appState={this.state} />
        <Search
          addData={this.addData}
          appState={this.state}
          toggleData={this.isTrue}
        />
      </div>
    );
  }
}
