import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const text= "Welcome To The Road To Learn React";
const user= [
  {
    name: 'summer',
    age: 30,
    eyecolor: 'brown',
    height: 5.6,
    address: 'www.facebook.com/summer',
    userId: '04',
  },
  {
    name: 'winter',
    age: 20,
    eyecolor: 'dark brown',
    height: 4.9,
    address: 'www.facebook.com/winter',
    userId: '02',
  },
  {
    name: 'autum',
    age: 32,
    eyecolor: 'yellow',
    height: 6.0,
    address: "www.facebook.com/autum",
    userId: '01',
  },
];
const searchUser= searchTerm =>(item)=>
  item.name.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
        searchTerm:'',
        user,
      };
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

  render() {
    const {searchTerm,user}=this.state;
    return (
        <div className="App">
          <h1>{text}</h1>
          <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          />
          <Table
              user={user}
              pattern={searchTerm}
              onDismis={this.onDismis}
          />

        </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <form>
          <input
              type="text"
              value={value}
              onChange={onChange}
          />
        </form>
    );
  }
}
class Table extends Component{
  render(){
    const { user, pattern, onDismis } = this.props;
    return (
        <div>
          {user.filter(searchUser(pattern)).map(item=> <div key={item.userId}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <a href={item.address}>{item.name}</a>
            <span>{item.eyecolor}</span>
            <span>{item.height}</span>
            <span>
              <button onClick={()=>onDismis(item.userId)} type="button"> DISMISS</button>
            </span> </div>)}
        </div>
    )
  }
}
export default App;
