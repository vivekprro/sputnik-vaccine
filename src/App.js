import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import ReactGA from 'react-ga';

import Styled from 'styled-components'


import HeaderMobile from './Mobile/components/Header/index'
import FooterMobile from './Mobile/components/Footer/index'
import SideDrawer from './Mobile/components/Sidedrawer/index'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './container/Home/index'
import NewsRoom from './container/NewsRoom/index'
import FAQ from './container/FAQ/index'
import ArticleDetails from './container/ArticleDetails/index'

const Main = Styled.div `
  min-height: 82vh;
  margin: 13vh 0 0 0;
`;

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
        <Main>
          <SideDrawer
            open={showSideDrawer}
            close={sideDrawerHandler} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/news-room' component={NewsRoom} />
            <Route path='/faq' component={FAQ} />
            <Route path='/news/:articleId' component={ArticleDetails} />
          </Switch>
        </Main>
        <FooterMobile />
      </Router>
    )
  }

  return (

    <Router>
      <Header />
      <Main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news-room' component={NewsRoom} />
          <Route path='/faq' component={FAQ} />
          <Route path='/news/:articleId' component={ArticleDetails} />
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}


export default App;
