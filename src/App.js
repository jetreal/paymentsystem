import React from 'react';
import './App.sass';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginContainer from './components/pages/Login/LoginContainer';
import Register from './components/pages/Register/Register';
import Main from './components/pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route path='/' exact
                 render={ () => <Main />}/>

        <Route path='/login'
                 render={ () => <LoginContainer />}/>

        <Route path='/register'
                render={ () => <Register/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
