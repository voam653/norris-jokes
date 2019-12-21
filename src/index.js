import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './app/scenes/Home';
import * as serviceWorker from './utils/service-worker';
import {Router,Route,browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('root')
);

serviceWorker.register();
