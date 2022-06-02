import React, { useEffect, useState } from 'react';
import './scss/index.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const url = 'https://6298df3df2decf5bb74d6cb9.mockapi.io/items';
    const response = await fetch(url);
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(items);
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
              { items.length && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
