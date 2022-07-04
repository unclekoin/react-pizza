import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/index.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <div className="wrapper">
        <Header searchValue={ searchValue } setSearchValue={ setSearchValue }/>
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home searchValue={ searchValue }/> }/>
            <Route path="/cart" element={ <Cart/> }/>
            <Route path="*" element={ <NotFound/> }/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
