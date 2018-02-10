import React, { Component } from 'react';
import  {
    BrowserRouter,
    Route
} from 'react-router-dom';
import Dashboard from './Dashboard';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
      <Route exact path="/" component={Dashboard} />

            </BrowserRouter>
        );
    }
}

export default Router;