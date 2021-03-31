import React from 'react'
import axios from 'axios';

export default class Table extends React.Component {
  state = {
    myData: []
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      const myData = response.data.results;
      this.setState({ myData });
    })
  }

  displayInitData = data => {

  }

  render() {
    const returnData = this.state.myData.map(returnItems => {
      const {name, birth_year, homeworld, height, mass, species} = returnItems;
      return(
        <tr>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{homeworld}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{species}</td>
        </tr>
      )
    })
    console.log(this.state.myData)
return (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">DOB</th>
        <th scope="col">Planet</th>
        <th scope="col">Height</th>
        <th scope="col">Mass</th>
        <th scope="col">Species</th>
      </tr>
    </thead>
    <tbody>
      {returnData}
    </tbody>
  </table>
    );
  }
}
