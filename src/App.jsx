import React from 'react';
import './scss/index.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

const App = () => {
  const cards = [
    {id: 1, title: 'Чизбургер-пицца', price: 395},
    {id: 2, title: 'Четыре сыра', price: 495},
    {id: 3, title: 'Чизбургер-пицца', price: 350},
    {id: 4, title: 'Чизбургер-пицца', price: 395},
    {id: 5, title: 'Чизбургер-пицца', price: 395},
    {id: 6, title: 'Чизбургер-пицца', price: 395},
    {id: 7, title: 'Чизбургер-пицца', price: 395},
    {id: 8, title: 'Чизбургер-пицца', price: 395},
    {id: 9, title: 'Чизбургер-пицца', price: 395},
  ];
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              { cards.map((card) => <PizzaBlock key={card.id} {...card} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
