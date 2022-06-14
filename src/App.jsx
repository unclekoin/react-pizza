import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/index.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App = () => {

  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/cart" element={ <Cart/> }/>
              <Route path="*" element={ <NotFound/> }/>
            </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
