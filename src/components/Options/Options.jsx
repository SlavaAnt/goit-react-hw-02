import css from "../Options/Options.module.css";

const Options = ({ updateFeedback, totalFeedback, handleResetReviews }) => {
  return (
    <div className={css.btnBox}>
      <button onClick={() => updateFeedback("good")} className={css.btn}>
        👌 Good
      </button>

      <button onClick={() => updateFeedback("neutral")} className={css.btn}>
        😐 Neutral
      </button>

      <button onClick={() => updateFeedback("bad")} className={css.btn}>
        👎 Bad
      </button>

      {totalFeedback !== 0 && (
        <button onClick={handleResetReviews} className={css.btn}>
          🧹 Reset
        </button>
      )}
    </div>
  );
};

export default Options;
