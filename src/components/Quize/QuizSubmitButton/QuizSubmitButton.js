import React from "react";
import { useSelector } from "react-redux";

export default function QuizSubmitButton() {
    const questions = useSelector((state) => state.quizeParams.quiz.results);
    const isSomeUnmarked = questions.some((question) => {
        return !question.marked;
    });
    function handleQuizSubmit() {}
    return (
        <div className={`theme_button center space_below ${isSomeUnmarked ? "disabled" : ""}`}>
            <button onClick={handleQuizSubmit}>Submit Quiz</button>
        </div>
    );
}
