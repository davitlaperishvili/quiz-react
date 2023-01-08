import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuizeParams } from "../../../redux/actions";
import QuestionAnswer from "./QuestionAnswer";
import "./quizeAnswer.scss";

export default function QuizeQuestion({ questionInfo, positionIndex }) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { category, question, correct_answer, incorrect_answers, marked } = questionInfo;

    function checkCorrectAnswer(e) {
        const checkAnswer = e.target.dataset.text === correct_answer;
        const newAnswersArray = [...state.quizeParams.quiz.results];
        newAnswersArray[positionIndex].marked = e.target.dataset.text;
        const quizParams = { params: { ...state.quizeParams.params }, quiz: { ...state.quizeParams.quiz, results: [...newAnswersArray] } };
        localStorage.setItem("currentQuiz", JSON.stringify(quizParams));
        dispatch(changeQuizeParams(quizParams));
    }

    function renderQuestionAnswers() {
        const answers = [...incorrect_answers, correct_answer];
        // const answers = [...incorrect_answers, correct_answer].sort(() => (Math.random() > 0.5 ? 1 : -1));

        const isMarked = marked ? true : false;

        return answers.map((item) => {
            console.log(item);
            const markedClass = isMarked && marked === item ? (item === correct_answer ? "correct" : "incorrect") : "";
            return <QuestionAnswer marked={markedClass} key={item} text={item} onCheck={(e) => checkCorrectAnswer(e)} />;
        });
    }

    return (
        <div className={`quiz_question ${marked ? "marked" : ""}`}>
            <div className="question_text" dangerouslySetInnerHTML={{ __html: question }}></div>
            <div className="question_answers">{renderQuestionAnswers()}</div>
        </div>
    );
}
