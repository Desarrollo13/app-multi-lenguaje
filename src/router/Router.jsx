import React, { Component } from 'react'
import {BrowserRouter,Switch,Route } from 'react-router-dom'
import App from "./../App";
import Explore from "./../components/Explore";
import Profile from "./../components/Profile";


export default class Router extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/explore" component={Explore} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/" component={App} />
                        
                    </Switch>
                </BrowserRouter>
               
                
            </div>
        )
    }
}
