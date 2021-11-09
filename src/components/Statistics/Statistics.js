import s from './Statistics.module.css';
import StatItem from '../StatItem/StatItem';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.rating}>
      <StatItem label="Good" value={good} />
      <StatItem label="Neutral" value={neutral} />
      <StatItem label="Bad" value={bad} />
      <StatItem label="Total" value={total} />
      <StatItem label="PositivePercentage" value={`${positivePercentage}%`} />
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
