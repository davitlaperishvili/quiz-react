import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuizeParams } from "../../redux/actions";

export default function ResumeQuiz() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    // dispatch(changeQuizeParams(quizParams));
    const currentQuiz = JSON.parse(localStorage.getItem("currentQuiz"));
    function renderCurrectQuiz() {
        dispatch(changeQuizeParams(currentQuiz));
    }
    function renderResumeQuiz() {
        if (currentQuiz) {
            return (
                <div className="resume_quiz" onClick={renderCurrectQuiz}>
                    Resume Current Quiz
                </div>
            );
        }
    }
    return renderResumeQuiz();
}
