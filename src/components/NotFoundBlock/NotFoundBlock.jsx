import React from 'react';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock(props) {
  return (
    <div className={ styles.root }>
      <h1>Страница 404</h1>
      <div className={ styles.description }>К сожалению ничего не найдено</div>
    </div>
  );
}

export default NotFoundBlock;
