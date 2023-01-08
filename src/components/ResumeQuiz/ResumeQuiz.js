import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuizeParams } from "../../redux/actions";
import "./ResumeQuiz.scss";

export default function ResumeQuiz() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    // dispatch(changeQuizeParams(quizParams));
    const currentQuiz = JSON.parse(localStorage.getItem("currentQuiz"));
    function renderCurrentQuiz() {
        dispatch(changeQuizeParams(currentQuiz));
    }
    function renderResumeQuiz() {
        if (currentQuiz) {
            return (
                <div className="resume_quiz">
                    <span onClick={renderCurrentQuiz}>Resume Current Quiz</span>
                </div>
            );
        }
    }
    return renderResumeQuiz();
}
