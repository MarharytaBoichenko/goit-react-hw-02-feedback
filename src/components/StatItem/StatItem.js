import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const StatItem = ({ label, value }) => {
  return (
    <>
      <li className={s.ratingText}>
        {label} : {value}
      </li>
    </>
  );
};

StatItem.propType = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};
export default StatItem;
