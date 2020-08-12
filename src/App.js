import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga'

import Home from './container/Home/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Distribution from './components/Main/Distribution/index';
import Registered from './components/Main/Registered/index';
import Producing from './components/Main/Producing/index';
import Status from './components/Main/CurrentStatus/index';

import './app.css'

function App(props) {

  useEffect(() => {
    ReactGA.initialize('UA-175206378-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, []);

  useEffect(() => {
    console.log(window.location.pathname + window.location.search);
  }, [])

  return (
    <Router>
      <Header />
      <main className="main">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/distribution' component={Distribution} />
          <Route path='/registered' component={Registered} />
          <Route path='/producing' component={Producing} />
          <Route path='/status' component={Status} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
