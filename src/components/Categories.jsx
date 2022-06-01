import React, { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('1');

  const categories = [
    { _id: '1', name: 'Все' },
    { _id: '2', name: 'Мясные' },
    { _id: '3', name: 'Вегетарианская' },
    { _id: '4', name: 'Гриль' },
    { _id: '5', name: 'Острые' },
    { _id: '6', name: 'Закрытые' },
  ];

  const categoryHandler = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className="categories">
      <ul>
        { categories.map(({ _id, name }) =>
          <li
            onClick={ () => categoryHandler(_id) }
            className={ _id === activeCategory ? 'active' : null }
            key={ _id }
            id={ _id }
          >
            { name }
          </li>
        ) }
      </ul>
    </div>
  );
};

export default Categories;
