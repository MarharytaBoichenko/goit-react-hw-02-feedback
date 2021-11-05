import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.rating}>
      <p className={s.ratingText}>
        Good: <span className={s.ratingFigure}>{good}</span>
      </p>
      <p className={s.ratingText}>
        Neutral: <span className={s.ratingFigure}> {neutral}</span>
      </p>
      <p className={s.ratingText}>
        Bad: <span className={s.ratingFigure}>{bad}</span>
      </p>
      <p className={s.ratingText}>
        Total: <span className={s.ratingFigure}>{total}</span>
      </p>
      <p className={s.ratingText}>
        Positive feedback:
        <span className={s.ratingFigure}>{positivePercentage}%</span>
      </p>
    </div>
  );
};
export default Statistics;
