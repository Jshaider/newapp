import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const text= "Welcome To The Road To Learn React";
    const user= [
      {
        name: 'summer',
        age: 30,
        eyecolor: 'brown',
        height: 5.6,
        address: 'www.facebook.com\summer',
        userId: '04',
      },
      {
        name: 'winter',
        age: 20,
        eyecolor: 'dark brown',
        height: 4.9,
        address: 'www.facebook.com\winter',
        userId: '02',
      },
      {
        name: 'autum',
        age: 32,
        eyecolor: 'yellow',
        height: 6.0,
        address: 'www.facebook.com\autum',
        userId: '01',
      },
    ];
    return (
        <div className="App">
          {user.map(item=> <div key={item.userId}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <a href={item.address}>{item.name}</a>
            <span>{item.eyecolor}</span>
            <span>{item.height}</span>
          </div>)}

        </div>
    );
  }
}
export default App;