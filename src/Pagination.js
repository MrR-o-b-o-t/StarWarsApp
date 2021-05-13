import React from "react"
import axios from "axios"
const prevBtn = document.getElementById("prevButton")
const nextBtn = document.getElementById("nextButton")
export default class Pagination extends React.Component {
  state = {
    isTrue: [],
    page: 1,
  }

  nextPagination = (e) => {
    e.preventDefault()
    this.props.appState.paginate = true
    this.props.appState.page++
    this.state.page++
    this.props.paginate()
  }

  prevPagination = (e) => {
    e.preventDefault()
    this.props.appState.paginate = true
    this.props.appState.page--
    this.state.page--
    this.props.paginate()
  }

  render() {
    return (
      <div className="column">
        <div className="d-flex justify-content-center">
          <div className="col-auto center">
            {this.state.page > 1 ? (
              <button
                id="prevButton"
                onClick={this.prevPagination}
                type="submit"
                className="btn btn-light btn-sm mr-2"
              >
                Prev
              </button>
            ) : (
              <button
                id="prevButton"
                onClick={this.pagination}
                type="submit"
                className="disabled"
              >
                Prev
              </button>
            )}
            {this.state.page < 9 ? (
              <button
                id="nextButton"
                onClick={this.nextPagination}
                type="submit"
                className="btn btn-light btn-sm ml-2"
              >
                Next
              </button>
            ) : (
              <button
                id="nextButton"
                onClick={this.nextPagination}
                type="submit"
                className="disabled"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
