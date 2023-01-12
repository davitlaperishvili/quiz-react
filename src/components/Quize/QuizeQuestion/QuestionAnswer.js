import React from "react";
import { useSelector } from "react-redux";

export default function QuestionAnswer({ text, onCheck, marked, index }) {
  const state = useSelector((state) => state);
  console.log(state.quizeParams.quiz.results[index]);
  return (
    <div
      className={`question_answer ${marked} ${
        state.quizeParams.quiz.results[index].marked &&
        state.quizeParams.quiz.results[index].correct_answer === text
          ? "correct"
          : ""
      }`}
      data-text={text}
      dangerouslySetInnerHTML={{ __html: text }}
      onClick={onCheck}
    ></div>
  );
}
