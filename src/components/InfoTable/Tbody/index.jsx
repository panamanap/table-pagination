import s from './Tbody.module.css';

const Tbody = ({ date, title, number, distance }) => {
  return (
    <tr className={s.tableData}>
      <td className={s.td}>{date}</td>
      <td className={s.td}>{title}</td>
      <td className={s.td}>{number}</td>
      <td className={s.td}>{distance}</td>
    </tr>
  );
};

export default Tbody;
