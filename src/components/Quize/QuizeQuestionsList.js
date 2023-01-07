import React, { useId } from "react";
import { useSelector } from "react-redux";
import "./quize.scss";
import QuizeQuestion from "./QuizeQuestion";

export default function QuizeQuestionsList() {
    const state = useSelector((state) => state);
    const id = useId();
    function renderQuestions() {
        return state.quize.results.map((question, index) => {
            return <QuizeQuestion key={id + index} question={question} />;
        });
    }
    return <div className="questions_list">{renderQuestions()}</div>;
}
