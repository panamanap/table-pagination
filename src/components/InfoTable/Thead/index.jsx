import React from 'react';
import s from './Thead.module.css';

const Thead = ({ title, requestSort, id  }) => {
  const sortItems = (id) => {
    if (id === 2) {
      requestSort('title');
    } else if (id === 3) {
      requestSort('number');
    } else if (id === 4) {
      requestSort('distance');
    }
  };

  return (
    <th className={s.title} onClick={() => sortItems(id)}>
      {title}
    </th>
  );
};

export default Thead;
