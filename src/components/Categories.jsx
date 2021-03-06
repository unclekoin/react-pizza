import React, { useState } from 'react';

const Categories = ({ value, changeCategory }) => {
  const categories = [
    { _id: null, name: 'Все' },
    { _id: '1', name: 'Мясные' },
    { _id: '2', name: 'Вегетарианская' },
    { _id: '3', name: 'Гриль' },
    { _id: '4', name: 'Острые' },
    { _id: '5', name: 'Закрытые' },
  ];

  return (
    <div className="categories">
      <ul>
        { categories.map(({ _id, name }) =>
          <li
            onClick={ () => changeCategory(_id) }
            className={ _id === value ? 'active' : null }
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
