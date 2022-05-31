import React from 'react';
import './scss/index.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import cards from './assets/db/pizzas.json';

const App = () => {
  console.log(cards)
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
