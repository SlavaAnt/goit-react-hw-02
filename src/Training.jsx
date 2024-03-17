// import React from "react";
// import { useState, useEffect } from "react";
// import Description from "./components/Description/Description";
// import Options from "./components/Options/Options";
// import Feedback from "./components/Feedback/Feedback";
// import "./index.css";
// import Notification from "./components/Notification/Notification";

// const initialReviews = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// const App = () => {
//   const [reviews, setReviews] = useState(
//     () => JSON.parse(localStorage.getItem("reviewValues")) ?? initialReviews //якщо в locale storage ще немає значень, вони беруться з initialReviews - оператор нульового поєднання (якщо ліворуч повертається null або undefined оператор повертає вираз праворуч)
//   );

//   const [isVisibleOptions, setIsVisibleOptions] = useState(false);

//   const updateFeedback = (feedbackType) => {
//     setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
//   };

//   const totalFeedback = Object.values(reviews).reduce(
//     (acc, el) => (acc = acc + el),
//     0
//   );

//   useEffect(() => {
//     console.log(`Component was updated. Total: ${totalFeedback} `);
//   }, [totalFeedback]);

//   const openOptions = () => {
//     setIsVisibleOptions(!isVisibleOptions);
//   };

//   const positiveReviews = Math.round(
//     ((reviews.good + reviews.neutral) / totalFeedback) * 100
//   );

//   useEffect(() => {
//     localStorage.setItem("reviewValues", JSON.stringify(reviews));
//   }, [reviews]);

//   const handleResetReviews = () => {
//     setReviews(initialReviews);
//   };

//   return (
//     <div className="container">
//       <button onClick={openOptions}>
//         {isVisibleOptions ? "Hide" : "Show"} options
//       </button>
//       <Description />
//       {isVisibleOptions && (
//         <Options
//           updateFeedback={updateFeedback}
//           totalFeedback={totalFeedback}
//           handleResetReviews={handleResetReviews}
//         />
//       )}

//       {totalFeedback === 0 ? (
//         <Notification />
//       ) : (
//         <Feedback
//           reviews={reviews}
//           totalFeedback={totalFeedback}
//           positiveReviews={positiveReviews}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

// //////////////////////////////////////////
// // Options;
// import React, { useEffect } from "react";
// import { useState } from "react";

// const Options = ({ updateFeedback, totalFeedback, handleResetReviews }) => {
//   // Монтування
//   // ----------
//   useEffect(() => {
//     console.log("Component was mounted");
//   }, []);

//   // -------------
//   // Розмонтування
//   // -------------
//   useEffect(() => {
//     return () => {
//       console.log("Component will be unmounted");
//     };
//   }, []);

//   // ---------
//   // Оновлення
//   // ---------
//   useEffect(() => {
//     console.log(`Component was updated. Total: ${totalFeedback} `);
//   }, [totalFeedback]);

//   return (
//     <div>
//       <button onClick={() => updateFeedback("good")}>👌 Good</button>

//       <button onClick={() => updateFeedback("neutral")}>😐 Neutral</button>

//       <button onClick={() => updateFeedback("bad")}>👎 Bad</button>

//       {totalFeedback !== 0 && (
//         <button onClick={handleResetReviews}>Reset</button>
//       )}
//     </div>
//   );
// };

// export default Options;

// ///////////////////////////////////////////
// Feedback;
// import React from "react";
// import { useEffect } from "react";

// const Feedback = ({ reviews, totalFeedback, positiveReviews }) => {
//   useEffect(() => {
//     console.log("Component was mounted");
//   }, []);

//   const { good, neutral, bad } = reviews;

//   return (
//     <ul>
//       <li>Good: {good}</li>
//       <li>Neutral: {neutral}</li>
//       <li>Bad: {bad}</li>
//       <li>Total: {totalFeedback}</li>
//       <li>Positive: {positiveReviews}%</li>
//     </ul>
//   );
// };

// export default Feedback;
