import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticsList from '../StatisticsList/StatisticsList';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StatisticsList stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
