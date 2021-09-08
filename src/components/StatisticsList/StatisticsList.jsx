import s from './StatisticsList.module.css';

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

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
