import React from "react";
import axios from "axios";

//Psuedo
// Enter search params (handleInput())
// use search params to set correct api get address to SWAPI
// pass correct api address to handleSubmit()
// use api address to get data related to search params
// pass collected data to Table.js
// set Table.js state to reflect collected data from Search.js
// render table with new state in Table.js

export default class Search extends React.Component {
    state = {
        searchData: []
      }

  handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    let api = `https://swapi.dev/api/people/?search=${value}`;
    this.setState({api})
    console.log(this.state)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get("https://swapi.dev/api/people/?search=r2")
    .then((response) => {
      const searchData = response.data;
    });
  };

  render() {
    return (
      <form className="searchInput">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label>Search</label>
            <input
              type="text"
              className="for-control ml-2"
              id="inlineFormInput"
              placeholder="Luke Skywalker"
              onChange={this.handleInput}
            ></input>
          </div>
          <div className="col-auto">
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-light btn-sm mb-1"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
