import React from "react";
// import axios from "axios"

export default class Pagination extends React.Component {
  //   pagination = () => {
  //     if (this.props.appState.myData.length < 10) {
  //       prevPage.disabled = true;
  //     } else {
  //       prevPage.disabled = false;
  //     }
  //     if (this.props.state.myData.length < 10) {
  //       nextPage.disabled = true;
  //     } else {
  //       nextPage.disabled = false;
  //     }
  //   };

  render() {
    return (
      <div className="column">
        <div className="d-flex justify-content-center">
          <div className="col-auto center">
            <button
              id="prevButton"
              onClick={this.pagination}
              type="submit"
              className="btn btn-light btn-sm mr-2"
            >
              Prev
            </button>
            <button
              id="nextButton"
              onClick={this.pagination}
              type="submit"
              className="btn btn-light btn-sm ml-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
