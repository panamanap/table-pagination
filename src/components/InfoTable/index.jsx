import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import './InfoTable.module.css';

const InfoTable = ({ thead, requestSort, items }) => {
  return (
    <table>
      <thead>
        <tr>
          {thead.map((item) => (
            <Thead
              key={item.id}
              title={item.title}
              id={item.id}
              requestSort={requestSort}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Tbody key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default InfoTable;
