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
  paginationSize: 3,
  pageStartIndex: 1,
  // alwaysShowAllBtns: true,
  // withFirstAndLast: false,
  // hideSizePerPage: true, 
  hidePageListOnlyOnePage: true, 
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: '20', value: 20
  }] 
};

export default class App extends Component {
  state = {
    myData: [],
    isTrue: [],
  };

  componentDidMount() {
    const getData = async () => {
      try {
        const data = await axios.get("https://swapi.dev/api/people/")
        console.log(data.data.results)
        const myData = data.data.results
        console.log(myData)
        this.setState({ myData })
        console.log(this.state)
      } catch (err) {
        console.log(err)
      }
    };
    getData();
  }

  componentDidUpdate() {
    if (this.state.isTrue[0] === true) {
      try{
        const userSearch = this.state.myData[0].api;
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
      const searchReturn = await axios.get(moreData.api)
      const myData = searchReturn.data.results
      this.setState({
        myData,
      })
    } catch (err) {
      console.log(err)
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
        {/* <Table
          addData={this.addData}
          appState={this.state}
          toggleData={this.isTrue}
        /> */}
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
