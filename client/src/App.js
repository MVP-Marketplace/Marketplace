import React from 'react';
import Login from './pages/login/Login.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import { AppContextProvider } from './context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>

  );
};

export default App;
