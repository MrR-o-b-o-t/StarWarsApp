// import React, { Component } from "react";
// import axios from 'axios';

// export default class Search extends Component {
//   state = {
//     swapi: {
//       name: '',
//       dob: '',
//       planet: ''
//     }
//   };

//   handleInput = e => {
//     const target = e.target;
//     const value = target.value;
//     const field = target.name;
//     this.setState({
//       swapi: {
//         ...this.state.swapi, 
//         [field]: value
//       }
//     })
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const swapi = this.state.swapi;
//     this.props.addData(swapi);
//     axios.get('http://swapi.dev/api/planets/1/')
//     .then(response => {
//       this.setState({ planet: response.data.name });
//       console.log(response.data.name);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//     this.setState({
//       swapi: {
//         name: '',
//         dob: '',
//         planet: ''
//       }
//     });
//   };

//   componentDidMount() {
//     axios.get('http://swapi.dev/api/people/1/')
//     .then(response => {
//       this.setState({ swapi: {
//         name: response.name,
//         dob: response.birth_year,
//         planet: response.homeworld
//       } });
//       console.log(response.data.name);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }

//   render() {
//     const { name, dob, planet } = this.state.swapi;
//     return (
//       <form className="searchInput">
//         <p className="planet">{name}</p>
//         <p className="planet">{dob}</p>
//         <p className="planet">{planet}</p>
//           <div className="form-row align-items-center">
//             <div className="col-auto">
//               <label>Search</label>
//               <input
//                 type="text"
//                 className="for-control ml-2"
//                 id="inlineFormInput"
//                 placeholder="Luke Skywalker"
//                 onChange={this.handleInput}
//                 // value={userSearch}
//               ></input>
//             </div>
//             <div className="col-auto">
//               <button 
//               onClick={this.handleSubmit} 
//               type="submit" 
//               className="btn btn-light btn-sm mb-1">
//                 Submit
//               </button>
//             </div>
//           </div>
//       </form>
//     );
//   }
// }

