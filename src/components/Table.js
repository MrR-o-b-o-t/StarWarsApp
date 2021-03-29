import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
              <th scope="col">Homeworld</th>
              <th scope="col">Species</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Luke Skywalker</th>
              <td>4/3/1987</td>
              <td>6'1</td>
              <th scope="row">185</th>
              <td>Tatooin</td>
              <td>Human</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table
