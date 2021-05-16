import React from "react"

export default class Pagination extends React.Component {
  state = {
    isTrue: [],
    page: 1,
    userSearch: this.props.appState.userSearch,
  }
  // Increase page in state on Next button click
  nextPagination = (e) => {
    e.preventDefault()
    this.props.appState.paginate = true
    this.props.appState.page++
    this.state.page++
    this.props.paginate()
  }
  // Decrease page in state on Prev button click
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
            {this.state.page > 1 ?? this.props.appState.userSearch === false ? (
              <button
                id="prevButton"
                onClick={this.prevPagination}
                type="submit"
                className="btn btn-light btn-sm mr-2"
              >
                Prev
              </button>
            ) : (
              <button id="prevButton" type="submit" className="disabled">
                Prev
              </button>
            )}
            {this.state.page < 9 && this.props.appState.userSearch === false ? (
              <button
                id="nextButton"
                onClick={this.nextPagination}
                type="submit"
                className="btn btn-light btn-sm ml-2"
              >
                Next
              </button>
            ) : (
              <button id="nextButton" type="submit" className="disabled">
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
