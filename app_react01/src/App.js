import React from 'react';
import{
    BrowserRouter as Router,
    Route,
    Routes,

}from "react-router-dom";

import { Home } from './pages/home/home'
import { Login } from './pages/login/login';

function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/login' element={ <Login />}/>
      </Routes>
      </Router>
    </div>
    
   );
}



export default App;
