import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound'; 

// Components
import Header from './components/Header/header'; 

const routing = (
    
    <BrowserRouter>
        {/*<div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>*/}

        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </BrowserRouter>

)

ReactDOM.render(
    routing,
    document.getElementById("root")
)