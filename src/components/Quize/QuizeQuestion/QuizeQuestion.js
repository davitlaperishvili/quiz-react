import React from "react";
import QuestionAnswer from "./QuestionAnswer";
import "./quizeAnswer.scss";

export default function QuizeQuestion({ questionInfo }) {
    const { category, question, correct_answer, incorrect_answers } = questionInfo;
    function renderQuestionAnswers() {
        const answers = [...incorrect_answers, correct_answer].sort(() => (Math.random() > 0.5 ? 1 : -1));
        return answers.map((item) => {
            return <QuestionAnswer key={item} text={item} />;
        });
    }
    return (
        <div className="quiz_question">
            <div className="question_text" dangerouslySetInnerHTML={{ __html: question }}></div>
            <div className="question_answers">{renderQuestionAnswers()}</div>
        </div>
    );
}
