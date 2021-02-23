import React from 'react';
import Login from './pages/login/Login.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import Journey from './pages/journey/Journey.js';
import { AppContextProvider } from './context/AppContext';
import BuilderExpectations from './pages/expectations/BuilderExpectations.js';
import FounderExpectations from './pages/expectations/FounderExpectations.js';
const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/journey' component={Journey} />
          <Route exact path='/builder' component={BuilderExpectations} />
          <Route exact path='/founder' component={FounderExpectations} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
