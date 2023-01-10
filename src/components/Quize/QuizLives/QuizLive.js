import React from "react";

export default function QuizLive({ heart }) {
    return (
        <div className="live_item">
            <i className={`ri-heart-${heart}`}></i>
        </div>
    );
}
