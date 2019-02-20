import React, { Component } from 'react';
// import logo from './logo.svg';
import Table from './Table.js';
import Search from './Search';
import './App.css';

const text= "Welcome To The Road To Learn React";
const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const URL=`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
        searchTerm:DEFAULT_QUERY,
        user:null,
      };
      this.setSearchTopStories=this.setSearchTopStories.bind(this);
      this.onDismis=this.onDismis.bind(this);
      this.onSearchChange=this.onSearchChange.bind(this);
    }

    onDismis(id){
    const isNotid = (item)=> item.userId !==id;
    const updatedlist= this.state.user.filter(isNotid)
    this.setState({user:updatedlist});
    }
    onSearchChange(e){
      this.setState({searchTerm:e.target.value});
    }
    setSearchTopStories(result){
      this.setState({user:result})
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        fetch(URL)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);

    }

  render() {
    const {searchTerm,user}=this.state;
      if (!user) { return null; };
    return (
        <div className="page">
          <h1>{text}</h1>
          <div className="interactions">
          <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          >Search: </Search></div>
          <Table
              user={user.hits}
              pattern={searchTerm}
              onDismis={this.onDismis}
          />

        </div>
    );
  }
}


export default App;
