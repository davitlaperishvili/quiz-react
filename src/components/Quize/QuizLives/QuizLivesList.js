import React, { useId } from "react";
import { useSelector } from "react-redux";
import "./QuizeLives.scss";
import QuizLive from "./QuizLive";

export default function QuizLivesList() {
    const state = useSelector((state) => state);

    const id = useId();
    function renderLives() {
        const maxLives = 3;
        const livesCount = state.quizeParams.quiz.lives;
        return [...Array(maxLives)].map((live, index) => {
            if (index + 1 <= livesCount) {
                return <QuizLive key={id + index} heart="fill" />;
            } else {
                return <QuizLive key={id + index} heart="line" />;
            }
        });
    }
    return (
        <div className="lives_wrap">
            <div className="lives_list">{renderLives()}</div>
        </div>
    );
}
