import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Update from './update';
import App from './App';

class Main extends Component{
    render(){
        return(
            <Router>
                <div>
                    <h1>Welcome To React</h1>
                    <ul>
                        <li>
                            <Link to="/todo">ToDo App</Link>
                        </li>
                        <li>
                            <Link to="/fetch">Fetch Server</Link>
                        </li>
                    </ul>
                    <hr/>
                    <switch>
                        <Route exact path='/todo' component={Update}/>
                        <Route path='/fetch' component={App}/>
                    </switch>
                </div>
            </Router>
        )
    }
}

const Default = () => (
    <div>
        <App/>
    </div>
);
const Home = () => (
    <div>
        <Update/>
    </div>
);
export default Main;