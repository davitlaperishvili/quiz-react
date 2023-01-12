import React from "react";
import { useSelector } from "react-redux";
import "./FinishQuiz.scss";

export default function FinishQuiz({ text, status }) {
  if (status === "success") {
    return (
      <div className={`finish_quiz ${status}`}>
        <h2>Congratulation!</h2>
        <div className="text">You Pass The Quiz</div>
      </div>
    );
  } else {
    return (
      <div className={`finish_quiz ${status}`}>
        <h2>You Failed :( </h2>
        <div className="text">
          Try One More Time! <br /> You Can do It!
        </div>
      </div>
    );
  }
}
function quizIsFinished(state) {
  const questions =
    state.quizeParams.quiz &&
    state.quizeParams.quiz.results &&
    state.quizeParams.quiz.results;

  let isFailed =
    state.quizeParams.quiz &&
    state.quizeParams.params.category &&
    state.quizeParams.quiz.lives <= 0;
  let isSuccess = false;
  if (questions) {
    isSuccess = questions.every((question) => {
      return question.marked;
    });
  }
  return {
    isFinished: !state.quize.finished && (isFailed || isSuccess),
    isFailed,
    isSuccess,
  };
}

export { quizIsFinished };
