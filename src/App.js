import React, { Component } from 'react';
// import logo from './logo.svg';
import Table from './Table.js';
import Search from './Search';
import './App.css';

const text= "Welcome To The Road To Learn React";
const DEFAULT_QUERY = 'stephen';
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
        const isNotid = (item)=> item.objectID !==id;
        const updatedHits= this.state.user.hits.filter(isNotid);
        this.setState({user: { ...this.state.user, hits: updatedHits }});
    }
    onSearchChange(e){
      this.setState({searchTerm:e.target.value});
      this.componentDidMount();
    }
    setSearchTopStories(result){
      this.setState({user:result});
        console.log(this.state.user);
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);

    }

  render() {
    const {searchTerm,user}=this.state;
      if (!user) { return <h1 className="loading">.....Is Loading....</h1>; };
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
