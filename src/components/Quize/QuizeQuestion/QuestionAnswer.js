import React from "react";

export default function QuestionAnswer({ text }) {
    return <div className="question_answer" dangerouslySetInnerHTML={{ __html: text }}></div>;
}
