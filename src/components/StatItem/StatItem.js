import s from '../Statistics/Statistics.module.css';
const StatItem = ({ good }) => {
  return (
    <>
      <p className={s.ratingText}>
        Good: <span className={s.ratingFigure}>{good}</span>
      </p>
      {/* <p className={s.ratingText}>
        Neutral: <span className={s.ratingFigure}> {neutral}</span>
      </p>
      <p className={s.ratingText}>
        Bad: <span className={s.ratingFigure}>{bad}</span>
      </p> */}
    </>
  );
};
export default StatItem;
