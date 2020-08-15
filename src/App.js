import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import ReactGA from 'react-ga';

import HeaderMobile from './Mobile/components/Header/index'
import FooterMobile from './Mobile/components/Footer/index'
import SideDrawer from './Mobile/components/Sidedrawer/index'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './container/Home/index'
import AboutVaccine from './container/AboutVaccine/index'
import AdenoviralVaccines from './container/AdenoviralVaccines/index'
import ClinicalTrials from './container/ClinicalTrials/index'
import NewsRoom from './container/NewsRoom/index'
import FAQ from './container/FAQ/index'

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
            <Route path='/' exact component={Home} />
            <Route path='/about-vaccine' component={AboutVaccine} />
            <Route path='/adenoviral-vaccines' component={AdenoviralVaccines} />
            <Route path='/clinical-trials' component={ClinicalTrials} />
            <Route path='/news-room' component={NewsRoom} />
            <Route path='/faq' component={FAQ} />
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
          <Route path='/about-vaccine' component={AboutVaccine} />
          <Route path='/adenoviral-vaccines' component={AdenoviralVaccines} />
          <Route path='/clinical-trials' component={ClinicalTrials} />
          <Route path='/news-room' component={NewsRoom} />
          <Route path='/faq' component={FAQ} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
