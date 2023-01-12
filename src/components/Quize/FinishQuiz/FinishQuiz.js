import React from "react";
import { useSelector } from "react-redux";

export default function FinishQuiz({ text, status }) {
  return <div className={`finish_quiz ${status}`}>{text}</div>;
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
