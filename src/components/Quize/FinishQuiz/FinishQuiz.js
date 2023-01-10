import React from "react";
import { useSelector } from "react-redux";

export default function FinishQuiz({ text, status }) {
    const questions = useSelector((state) => state.quizeParams.quiz.results);
    const lives = useSelector((state) => state.quizeParams.quiz.lives);
    const isSomeUnmarked = questions.some((question) => {
        return !question.marked;
    });

    function handleQuizSubmit() {}
    if (lives == 0 || !isSomeUnmarked) {
        return <div className={`finish_quiz ${status}`}>{text}</div>;
    }
}
