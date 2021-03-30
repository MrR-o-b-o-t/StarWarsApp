import React, { Component } from 'react'
// import axios from 'axios';

export default class Table extends Component {

  render() {
    const { swapiData } = this.props;
    console.log(this.props);
    const swapiDataReturn = swapiData.map(swapi => {
    const { name, dob, planet } = swapi;
    return (
      <tr key={swapi}>
      <td>{name}</td>
      <td>{dob}</td>
      <td>{planet}</td>
    </tr>
  );
});
return (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">DOB</th>
        <th scope="col">Planet</th>
      </tr>
    </thead>
    <tbody>
      {swapiDataReturn.length > 0 ? (
        swapiDataReturn
      ) : (
        <tr>
          <td>No data found.</td>
        </tr>
      )}
    </tbody>
  </table>
    );
  }
}

