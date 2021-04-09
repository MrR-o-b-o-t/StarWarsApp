import React from "react";
import axios from "axios";

export default class Table extends React.Component {
  state = {
    myData: [],
  };

  render() {
    if (this.props.appState.myData.length === 0) {
      console.log(this.props.appState)
      axios.get("https://swapi.dev/api/people").then((response) => {
        // console.log(response)
        const myData = response.data.results;
        this.setState({ myData });
      });
      const returnData = this.state.myData.map((returnItems) => {
        let {
          name,
          birth_year,
          homeworld,
          height,
          mass,
          species,
        } = returnItems;
        return (
          <tr>
            <td>{name}</td>
            <td>{birth_year}</td>
            <td>{homeworld}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{species}</td>
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
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
              <th scope="col">Species</th>
            </tr>
          </thead>
          <tbody>{returnData}</tbody>
        </table>
      );
    } else if(this.props.appState.myData[0].api) {
      const userSearch = this.props.appState.myData[0].api;
      axios.get(userSearch).then((response) => {
        const myData = response.data.results;
        this.setState({ myData });
        console.log(this.props.appState.myData[0].api)
      });
      const userSearchData = this.state.myData.map((returnItems) => {
        let {
          name, 
          birth_year, 
          homeworld, 
          height, 
          mass, 
          species} 
        = returnItems;
        return (
          <tr>
            <td>{name}</td>
            <td>{birth_year}</td>
            <td>{homeworld}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{species}</td>
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
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
              <th scope="col">Species</th>
            </tr>
          </thead>
          <tbody>{userSearchData}</tbody>
        </table>
      );
    }
  }
}


