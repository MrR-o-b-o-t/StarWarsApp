import React, { Component } from "react";

class Search extends Component {
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
              ></input>
            </div>
            <div className="col-auto">
              <button type="submit" class="btn btn-light btn-sm mb-1">
                Submit
              </button>
            </div>
          </div>
      </form>
    );
  }
}

export default Search;
