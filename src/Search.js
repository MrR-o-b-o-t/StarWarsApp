import React from "react"

export default class Search extends React.Component {
  state = {}
  // Collect user input and set api url call address
  handleInput = (e) => {
    const target = e.target
    const value = target.value
    let api = `https://swapi.dev/api/people/?search=${value}`
    this.setState({ api })
  }
  // Pass submition of user search input to App.js
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addData(this.state)
    this.props.toggleData(true)
    document.querySelector(".searchInput").reset()
  }
  // Reset App.js state to default api call data
  handleReset = () => {
    let myData = "https://swapi.dev/api/people/"
    this.props.addData({ myData })
  }

  render() {
    return (
      <div className="searchContainer">
        <form className="searchInput">
          <div className="form-row align-center">
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
            <div className="col-auto" id="searchBtnDiv">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-light btn-sm mb-1"
              >
                Submit
              </button>
              <button
                onClick={this.handleReset}
                type="submit"
                className="btn btn-light btn-sm mb-1 ml-2"
              >
                Reset Data
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
