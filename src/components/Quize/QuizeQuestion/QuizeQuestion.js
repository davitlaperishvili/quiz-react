import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuize, changeQuizeParams } from "../../../redux/actions";
import { quizIsFinished } from "../FinishQuiz/FinishQuiz";
import QuestionAnswer from "./QuestionAnswer";
import "./quizeAnswer.scss";

export default function QuizeQuestion({ questionInfo, positionIndex }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { category, question, correct_answer, incorrect_answers, marked } =
    questionInfo;

  function checkCorrectAnswer(e) {
    const answerIsCorrect = e.target.dataset.text === correct_answer;
    let livesCount = state.quizeParams.quiz.lives;
    if (!answerIsCorrect) {
      livesCount -= 1;
    }
    const newAnswersArray = [...state.quizeParams.quiz.results]; // duplicate quiz array
    newAnswersArray[positionIndex].marked = e.target.dataset.text; // mark clicked question as marked and save choosed answer in marked key

    const quizParams = {
      params: { ...state.quizeParams.params },
      quiz: {
        ...state.quizeParams.quiz,
        results: [...newAnswersArray],
        lives: livesCount,
      },
    }; // create new object for redux state

    localStorage.setItem(
      "currentQuiz",
      JSON.stringify({ quizeParams: quizParams })
    ); // save updated state object in localstorage
    dispatch(changeQuizeParams(quizParams)); // update state
  }

  function renderQuestionAnswers() {
    const answers = [...incorrect_answers, correct_answer]; // concat incorrect and correct answers
    // const answers = [...incorrect_answers, correct_answer].sort(() => (Math.random() > 0.5 ? 1 : -1));

    const isMarked = marked ? true : false; // check if question is marked

    return answers.map((item) => {
      const markedClass =
        isMarked && marked === item
          ? item === correct_answer
            ? "correct"
            : "incorrect"
          : ""; // check if answer is checked then add class based on correct answer
      return (
        <QuestionAnswer
          marked={markedClass}
          key={item}
          text={item}
          onCheck={(e) => checkCorrectAnswer(e)}
        />
      );
    });
  }

  return (
    <div className={`quiz_question ${marked ? "marked" : ""}`}>
      <div className="question_title">
        <div className="number">{positionIndex + 1}.</div>
        <div
          className="question_text"
          dangerouslySetInnerHTML={{ __html: question }}
        ></div>
      </div>
      <div className="question_answers">{renderQuestionAnswers()}</div>
    </div>
  );
}
