import React, { Component } from "react"
import axios from "axios"
import Header from "./Header"
import Search from "./Search"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootStrap from "react-bootstrap"
import BootstrapTable from "react-bootstrap-table-next"
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

const columns = [
  {dataField: "name", text: "Name"},
  {dataField: "birth_year", text: "D.O.B"},
  {dataField: "homeworld", text: "Home World"},
  {dataField: "height", text: "Height"},
  {dataField: "mass", text: "Mass"},
  {dataField: "species", text: "Species"}
]
const options = {
  paginationSize: 2,
  pageStartIndex: 1,
  // alwaysShowAllBtns: true,
  withFirstAndLast: false,
  hideSizePerPage: true, 
  hidePageListOnlyOnePage: true, 
  // firstPageText: 'First',
  // prePageText: 'Back',
  // nextPageText: 'Next',
  // lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: false,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '10', value: 10
  }] 
};

export default class App extends Component {
  state = {
    myData: [],
    isTrue: [],
  };

  componentDidMount() {
    function getAllStarwarsPeople() {
      let people = [];
      return axios("https://swapi.dev/api/people/")
        .then((response) => {
          people = response.data.results;
          return response.data.count;
        })
        .then((count) => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          let promises = [];
          for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(axios(`https://swapi.dev/api/people?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          people = response.reduce(
            (acc, data) => [...acc, ...data.data.results],
            people
          );
          return people;
        })
        .catch((err) => console.log(err));
    }
    (async () => {
      const myData = await getAllStarwarsPeople();
      this.setState({myData})
      console.log(this.state)
    })();

  }

  componentDidUpdate() {
    if (this.state.isTrue[0] === true) {
      try {
        const userSearch = this.state.myData[0].api
        axios.get(userSearch).then((response) => {
          const myData = response.data.results
          this.setState({ myData })
          this.state.isTrue = false
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  addData = async (moreData) => {
    try {
      const searchReturn = await axios.get(moreData.api);
      const myData = searchReturn.data.results;
      this.setState({
        myData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  isTrue = (toggle) => {
    this.setState({
      isTrue: [toggle],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <BootstrapTable
          keyField="name"
          data={this.state.myData}
          columns={columns}
          pagination={paginationFactory(options)}
          bordered={false}
          condensed
        />
        <Search
          addData={this.addData}
          appState={this.state}
          toggleData={this.isTrue}
        />
      </div>
    );
  }
}
