import s from './StatisticsList.module.css';
import { getRandomColor } from '../../helpers/getRandomColor';

function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(el => (
        <li
          key={el.id}
          className={s.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className="label">{el.label}</span>
          <span className={s.percentage}>{el.percentage}&#37;</span>
        </li>
      ))}
    </ul>
  );
}

export default StatisticsList;
