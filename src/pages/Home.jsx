import React, { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Card from '../components/PizzaBlock/Card';

function Home() {
  const [items, setItems] = useState(new Array(6).fill(1));
  const [isLoading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState('0');
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const url = `https://6298df3df2decf5bb74d6cb9.mockapi.io/items?category=${ categoryId }`;
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={ categoryId } onClickCategory={ (id) => setCategoryId(id) }/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { items.map((item, index) => (isLoading ? <Skeleton key={ index }/> :
          <Card key={ item.id } { ...item } />)) }
      </div>
    </div>
  );
}

export default Home;
