import css from "../Feedback/Feedback.module.css";

const Feedback = ({ reviews, totalFeedback, positiveReviews }) => {
  const { good, neutral, bad } = reviews;

  return (
    <ul className={css.feedbackBox}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li className={css.textTotal}>Total: {totalFeedback}</li>
      <li className={css.textTotal}>Positive: {positiveReviews}%</li>
    </ul>
  );
};

export default Feedback;
