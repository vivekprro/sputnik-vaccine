import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import ReactGA from 'react-ga';

import Home from './container/Home/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Distribution from './components/Main/Distribution/index';
import Registered from './components/Main/Registered/index';
import Producing from './components/Main/Producing/index';
import Status from './components/Main/CurrentStatus/index';
// import SideDrawer from './components/Main/Sidedrawer/index';

import HomeMobile from './Mobile/components/MainContent/index'
import HeaderMobile from './Mobile/components/Header/index'
import FooterMobile from './Mobile/components/Footer/index'
import SideDrawer from './Mobile/components/Sidedrawer/index';

import './app.css'

function App(props) {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  useEffect(() => {
    ReactGA.initialize('UA-175206378-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, []);

  const sideDrawerHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }

  if (isMobile) {
    return (
      <Router>
        <HeaderMobile drawerToggle={sideDrawerToggleHandler} />
        <main className="main">
          <SideDrawer
            open={showSideDrawer}
            close={sideDrawerHandler} />
          <Switch>
            <Route path='/' exact component={HomeMobile} />
          </Switch>
        </main>
        <FooterMobile />
      </Router>
    )
  }

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
