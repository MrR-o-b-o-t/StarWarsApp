import React from 'react';
import axios from 'axios';


export default class Table extends React.Component {
  state = {
    myData: []
  }

  // addData = data => {
  //   this.setState({
  //     myData: [...this.state.myData, data]
  //   });
  // };

  //   console.log(this.props.appState.myData.length)
  //   if(this.props.appState.myData.length === 0){
  //   axios.get('https://swapi.dev/api/people')
  //   .then(response => {
  //     const myData = response.data.results;
  //     this.setState({ myData });
  //   })
  // } 
  
  render() {
    if(this.props.appState.myData.length <1 ) {
      console.log(this.state)
      axios.get('https://swapi.dev/api/people')
      .then(response => {
      const myData = response.data.results;
      this.setState({ myData });
      })
    } else if(this.props.appState.myData.length > 0) {
      // console.log(this.props.appState.myData[0].api)
      const userSearch = this.props.appState.myData[0].api
      axios.get(userSearch)
      .then(response => {
      const myData = response.data.results;
      this.setState({ myData });
      })
    }
    const returnData = this.state.myData.map(returnItems => {
      let {name, birth_year, homeworld, height, mass, species} = returnItems;
      if(homeworld === "http://swapi.dev/api/planets/1/") {
        homeworld = "Tatooin";
      } else if(homeworld === "http://swapi.dev/api/planets/2/") {
        homeworld = "Alderaan";
      }else if(homeworld === "http://swapi.dev/api/planets/8/") {
        homeworld = "Naboo";
    } else if (homeworld === "http://swapi.dev/api/planets/20/") {
      homeworld = "Stewjon";
    }
    
    if (species = "https://swapi.dev/api/species/2/") {
      species = "Droid";
    }
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