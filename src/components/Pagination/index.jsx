import s from './Pagination.module.css';

const Pagination = ({ amountOfElemPage, tbody, setCurrentPage }) => {
  const numberOfPages = [];

  for (let i = 1; i < Math.ceil(tbody.length / amountOfElemPage)+1; i++) {
    numberOfPages.push(i);
  }

  return (
    <ul className={s.pagesList}>
      {numberOfPages.map((page) => (
        <li key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
