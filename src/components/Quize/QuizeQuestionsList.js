import React, { useId } from "react";
import { useSelector } from "react-redux";
import "./quize.scss";
import QuizeQuestion from "./QuizeQuestion/QuizeQuestion";

export default function QuizeQuestionsList() {
    const state = useSelector((state) => state);
    const id = useId();
    function renderQuestions() {
        return state.quize.results.map((question, index) => {
            return <QuizeQuestion key={id + index} questionInfo={question} />;
        });
    }
    return (
        <>
            <div className="quize_title">
                <div className="title">{state.quizeParams.categoryName}</div>
                <div className="difficulty">Difficulty: {state.quizeParams.difficulty}</div>
            </div>
            <div className="questions_list">{renderQuestions()}</div>
        </>
    );
}
