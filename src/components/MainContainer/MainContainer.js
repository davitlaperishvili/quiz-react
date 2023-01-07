import React, { useEffect } from "react";
import GetQuestions from "../../server/GetQuestions";
import "./MainContainer.scss";

export default function MainContainer() {
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const questions = await GetQuestions();
            console.log(questions);
            return;
            // ...
        }
        const questions = fetchData();
    }, []);
    return <div className="main_container">Main Container</div>;
}
