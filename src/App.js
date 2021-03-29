import React from "react";
import Header from "./components/Header";
import Table from "./components/Table"
import Search from "./components/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Table />
      <Search />
    </div>
  );
}

export default App;
