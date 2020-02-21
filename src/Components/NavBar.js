import React from 'react';
import {  DEFAULTUSER } from '../constants';

export default class NavBar extends React.Component {
   state = {
    searchUser: ''
  }
  
  handleChange = event => {
    this.setState({ searchUser: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    let search= this.query.value.length !== 0 ? this.query.value :DEFAULTUSER ;
    this.props.onSearch(search);
    event.currentTarget.reset();
  }
  
  render() {  
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand" >Github Repositories</h1>
        <form className="form-inline my-2 my-lg-0" style={{"float":"right"}} onSubmit={this.handleSubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} name="search"  ref={(input) => this.query = input}/>
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{"width":"80px"}}>Search</button>
        </form>
        </nav>
      </div>
    );
  }
}