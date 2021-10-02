import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import Pagination from './components/Pagination';
import InfoTable from './components/InfoTable';
import { useSortingItems } from './components/hooks/useSortingITems';

function App() {
  const [loading, setLoading] = useState(false);
  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  const { items, requestSort, amountOfElemPage, setCurrentPage } =
    useSortingItems(tbody);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      (async () => {
        try {
          const res = await fetch('http://localhost:3001/db.json');
          const json = await res.json();
          setThead(json.thead);
          setTbody(json.tbody);
          setLoading(false);
        } catch (error) {
          alert('Ошибка при запросе данных');
        }
      })();
    }, 0);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={s.wrapper}>
      <InfoTable
        thead={thead}
        items={items}
        requestSort={requestSort}
      />
      <Pagination
        amountOfElemPage={amountOfElemPage}
        tbody={tbody}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
