import React from "react"
import axios from "axios"

export default class Table extends React.Component {
  // Update render with correct api call data after user search
  componentDidUpdate() {
    if (this.props.appState.isTrue[0] === true) {
      const userSearch = this.props.appState.myData.url
      axios.get(userSearch).then((response) => {
        const myData = response.data.results
        this.setState({ myData })
        this.props.appState.isTrue = false
      })
    }
  }

  render() {
    const returnData = this.props.appState.myData.map((returnItems) => {
      let { name, birth_year, homeworld, height, mass, species } = returnItems
      return (
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
          {returnData.length > 0 ? (
            returnData
          ) : (
            <tr>
              <td>No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}
