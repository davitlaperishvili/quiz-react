import React, { useId } from "react";
import { useSelector } from "react-redux";
import "./quize.scss";
import QuizeQuestion from "./QuizeQuestion/QuizeQuestion";

export default function QuizeQuestionsList() {
    const state = useSelector((state) => state);
    const id = useId();
    function renderQuestions() {
        return state.quizeParams.quiz.results.map((question, index) => {
            return <QuizeQuestion key={id + index} id={id + index} positionIndex={index} questionInfo={question} />;
        });
    }
    return (
        <>
            <div className="quize_title">
                <div className="title">{state.quizeParams.params.categoryName}</div>
                <div className="difficulty">Difficulty: {state.quizeParams.params.difficulty}</div>
            </div>
            <div className="questions_list">{renderQuestions()}</div>
        </>
    );
}
