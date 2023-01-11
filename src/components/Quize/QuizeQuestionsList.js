import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuizeParams } from "../../redux/actions";
import FinishQuiz from "./FinishQuiz/FinishQuiz";
import "./quize.scss";
import QuizeQuestion from "./QuizeQuestion/QuizeQuestion";
import QuizLivesList from "./QuizLives/QuizLivesList";
import QuizSubmitButton from "./QuizSubmitButton/QuizSubmitButton";

export default function QuizeQuestionsList() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const id = useId();
    function renderQuestions() {
        return state.quizeParams.quiz.results.map((question, index) => {
            return <QuizeQuestion key={id + index} id={id + index} positionIndex={index} questionInfo={question} />;
        });
    }
    function goBack() {
        // go back to initial state and category listing
        dispatch(changeQuizeParams({ params: { difficulty: "easy" } }));
    }
    return (
        <>
            <div className="quize_title">
                <div className="title">{state.quizeParams.params.categoryName}</div>
                <div className="difficulty">Difficulty: {state.quizeParams.params.difficulty}</div>
                <div className="go_back" onClick={goBack}>
                    Go Back
                </div>
            </div>
            <QuizLivesList />
            <div className="questions_list">{renderQuestions()}</div>
        </>
    );
}
