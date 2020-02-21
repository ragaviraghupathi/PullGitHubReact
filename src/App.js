import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import { GITHUBURI,DEFAULTUSER } from './constants';
import NavBar from './Components/NavBar.js';
import RepositoriesList from './Components/RepositoriesList';
import { Error } from './Components/Error';

export default class App extends Component {
   constructor() {
     super();
     this.state = {
      repositories: [],
      loading: true,
      error:false
      };
    } 
     
  componentDidMount() {
    this.handleSearch();
  }
     
   handleSearch = (username = DEFAULTUSER) => {
    axios.get(GITHUBURI+`${username}/repos`)
      .then(response => {
        this.setState({
          username: username,
          repositories: response.data,
             loading: false,
          error:false
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });    
  }
  
  render() { 
   const { username, repositories, error,loading}= this.state ;
    return (
      <div  className="container">
        <NavBar onSearch={this.handleSearch} />      
        {(error)
          ? <Error />
          : (loading)
            ? <p>Loading...</p>
            : <div className="container">
                <h2> user : {username}</h2>
                <RepositoriesList data={repositories} />
              </div>
          }          
      </div>
    );
  }
}
