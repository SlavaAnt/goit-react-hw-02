import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./index.css";

const initialReviews = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [reviews, setReviews] = useState(
    () => JSON.parse(localStorage.getItem("reviewValues")) ?? initialReviews
  );

  const updateFeedback = (feedbackType) => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const totalFeedback = Object.values(reviews).reduce(
    (acc, el) => (acc = acc + el),
    0
  );

  const positiveReviews = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  useEffect(() => {}, [totalFeedback]);

  useEffect(() => {
    localStorage.setItem("reviewValues", JSON.stringify(reviews));
  }, [reviews]);

  const handleResetReviews = () => {
    setReviews(initialReviews);
  };

  return (
    <div className="container">
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetReviews={handleResetReviews}
      />

      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positiveReviews={positiveReviews}
        />
      )}
    </div>
  );
};

export default App;
