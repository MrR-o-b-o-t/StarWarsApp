import React from "react";

//Psuedo
// Enter search params (handleInput())
// use search params to set correct api get address to SWAPI
// pass correct api address to handleSubmit()
// pass api address to app.js state in handleSubmit()
// in Table.js check app.js state to see if user input exists
// if no - set Table.js state using default api request and render default results
// if yes - set Table.js state using app.js state (user search api address) 
// Render table using new Table.js state 

export default class Search extends React.Component {
    state = {
        
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
    this.props.addData(this.state)
    this.props.toggleData(true)
    console.log(this.props.appState)
    console.log("Submit Button Pressed")
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
              placeholder="Search"
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
