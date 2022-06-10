import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={ 2 }
      height={ 465 }
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="125" r="125"/>
      <rect x="0" y="275" rx="10" ry="10" width="280" height="20"/>
      <rect x="0" y="311" rx="10" ry="10" width="280" height="88"/>
      <rect x="0" y="428" rx="10" ry="10" width="100" height="24"/>
      <rect x="123" y="418" rx="25" ry="25" width="152" height="45"/>
    </ContentLoader>
  );
};

export default Skeleton;

