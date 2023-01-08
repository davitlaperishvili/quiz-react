import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuize, changeQuizeParams } from "../../redux/actions";
import GetQuestions from "../../server/GetQuestions";
import ResumeQuiz from "../ResumeQuiz/ResumeQuiz";
import "./QuizeCategories.scss";

export default function QuizeCategories() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    async function setQuizeState(categoryID, e) {
        try {
            async function fetchData() {
                const questions = await GetQuestions({ ...state.quizeParams.params, category: categoryID });
                // dispatch(changeQuize(questions));
                return questions;
            }
            const quiz = await fetchData();
            const quizParams = { params: { ...state.quizeParams.params, category: categoryID, categoryName: e.target.innerText }, quiz };
            dispatch(changeQuizeParams(quizParams));
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="quize_categories">
            <div className="categories_title">Take A Quize</div>
            <ResumeQuiz />
            <nav>
                <ul>
                    <li>
                        <span onClick={(e) => setQuizeState(9, e)}>General Knowledge</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(10, e)}>Books</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(11, e)}>Film</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(12, e)}>Music</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(13, e)}>Musicals & Theatres</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(14, e)}>Television</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(15, e)}>Video Games</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(16, e)}>Board Games</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(17, e)}>Science & Nature</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(18, e)}>Computers</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(19, e)}>Mathematics</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(20, e)}>Mythology</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(21, e)}>Sports</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(22, e)}>Geography</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(23, e)}>History</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(24, e)}>Politics</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(25, e)}>Art</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(26, e)}>Celebrities</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(27, e)}>Animals</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(28, e)}>Vehicles</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(29, e)}>Comics</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(30, e)}>Gadgets</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(31, e)}>Japanese Anime & Mang</span>
                    </li>
                    <li>
                        <span onClick={(e) => setQuizeState(32, e)}>Cartoon & Animations</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
