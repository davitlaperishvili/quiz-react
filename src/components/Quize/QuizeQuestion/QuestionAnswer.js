import React from "react";

export default function QuestionAnswer({ text, onCheck, marked }) {
    return <div className={`question_answer ${marked}`} data-text={text} dangerouslySetInnerHTML={{ __html: text }} onClick={onCheck}></div>;
}
