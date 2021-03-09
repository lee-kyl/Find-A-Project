import React from 'react';
import { Router } from 'react-router-dom';
import Header from './Components/Header';
import Routes from './Routes/routes';
import history from './Services/history';

function App() {
  return (
    <>
      <Router history={history}>
          <Header></Header>
          <Routes />
      </Router>
    </>
  );
}

export default App;
