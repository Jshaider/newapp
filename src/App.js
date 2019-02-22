import React, { Component } from 'react';
// import logo from './logo.svg';
import Table from './Table.js';
import Search from './Search';
import './App.css';

const text= "Welcome To The Road To Learn React";
const DEFAULT_QUERY = 'stephen';
const DEFAULT_HPP = '100';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PAGE_PARAM =  'page=';
const PARAM_HPP = 'hitsPerPage=';
const URL=`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}${PAGE_PARAM}`;


class App extends Component {
  constructor(props) {
      super(props);
      this.state={
        searchTerm:'',
        user:null,
      };
      this.setSearchTopStories=this.setSearchTopStories.bind(this);
      this.onDismis=this.onDismis.bind(this);
      this.fetchNewStories=this.fetchNewStories.bind(this);
      this.onSearchChange=this.onSearchChange.bind(this);
      this.onSearchSubmit=this.onSearchSubmit.bind(this);
    }

    fetchNewStories(searchTerm, page=0){
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PAGE_PARAM}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }

    onSearchSubmit(e){
      const {searchTerm}= this.state;
      this.fetchNewStories(searchTerm);
      e.preventDefault();
    }

    onDismis(id){
        const isNotid = (item)=> item.objectID !==id;
        const updatedHits= this.state.user.hits.filter(isNotid);
        this.setState({user: { ...this.state.user, hits: updatedHits }});
    }
    onSearchChange(e){
      this.setState({searchTerm:e.target.value});
      const {searchTerm} = this.state;
    }
    setSearchTopStories(result){
      this.setState({user:result});
        const { hits, page } = result;
        const oldHits = page !== 0
            ? this.state.user.hits
            : [];
        const updatedHits = [
            ...oldHits,
            ...hits
        ];
        this.setState({
            user: { hits: updatedHits, page }
        });
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchNewStories(searchTerm);

    }

  render() {
    const {searchTerm,user}=this.state;
    const page = (user && user.page) || 0;
    return (
        <div className="page">
          <h1>{text}</h1>
          <div className="interactions">
              <button onClick={() => this.fetchNewStories(searchTerm, page + 1)}>
                  More
              </button>
          <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
          >Search: </Search>

          </div>
            {user?<Table
              user={user.hits}
              onDismis={this.onDismis}
          /> : <h1 className="loading">Fetching Data From Server</h1>}

        </div>
    );
  }
}


export default App;
