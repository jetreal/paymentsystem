import React from 'react';
import './App.sass';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginContainer from './components/pages/Login/LoginContainer';

import ContainerRegister from './components/pages/Register/ContainerRegister';
import MainContainer from './components/pages/Main/MainContainer';
import { Lines } from 'react-preloaders';

function App() {
  return (
    <BrowserRouter>
      <Lines color={'#f7f7f7'}>
        <div className="App">

          <Route path='/' exact
                  render={ () => <MainContainer />}/>

          <Route path='/login'
                  render={ () => <LoginContainer />}/>

          <Route path='/register'
                  render={ () => <ContainerRegister/>}/>
        </div>

      </Lines>
    </BrowserRouter>
  );
}

export default App;
