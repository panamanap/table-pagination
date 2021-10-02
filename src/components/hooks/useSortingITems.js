import React from 'react';

const amountOfElemPage = 10;

export const useSortingItems = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  const [currentPage, setCurrentPage] = React.useState(1);

  const lastIndex = currentPage * amountOfElemPage;
  const firstIndex = lastIndex - amountOfElemPage;

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const currentData = sortedItems.slice(firstIndex, lastIndex);


  return { items: currentData, requestSort, amountOfElemPage, setCurrentPage, sortConfig };
};
