import React from "react";
import axios from "axios";

export default class Search extends React.Component {
    state = {
        searchData: []
      }

  handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    console.log(target);
    const api = `https://swapi.dev/api/people/?search=${value}`;
    console.log(api);
  };

  handleSubmit = (e) => {
    console.log(this.props)
    axios.get("https://swapi.dev/api/people/?search=r2")
    .then((response) => {
      const searchData = response.data;
      this.setState({ searchData });
    });
    e.preventDefault();
    const searchData = this.state.searchData;
    this.props.addData(searchData);
    this.setState({searchData})
    console.log(this.state)
  };

  //   componentDidMount() {
  //     axios.get('http://swapi.dev/api/people/1/')
  //     .then(response => {
  //       this.setState({ swapi: {
  //         name: response.name,
  //         dob: response.birth_year,
  //         planet: response.homeworld
  //       } });
  //       console.log(response.data.name);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }

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
