import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuize, changeQuizeParams } from "../../redux/actions";
import GetQuestions from "../../server/GetQuestions";
import "./QuizeCategories.scss";

export default function QuizeCategories() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    function setQuizeState(categoryID) {
        const category = { category: categoryID };
        try {
            async function fetchData() {
                const questions = await GetQuestions(state.quizeParams);
                console.log(questions);
                dispatch(changeQuizeParams(category));
                dispatch(changeQuize(questions));
            }
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="quize_categories">
            <div className="categories_title">Take A Quize</div>
            <nav>
                <ul>
                    <li>
                        <span onClick={() => setQuizeState(9)}>General Knowledge</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(10)}>Books</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(11)}>Film</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(12)}>Music</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(13)}>Musicals & Theatres</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(14)}>Television</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(15)}>Video Games</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(16)}>Board Games</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(17)}>Science & Nature</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(18)}>Computers</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(19)}>Mathematics</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(20)}>Mythology</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(21)}>Sports</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(22)}>Geography</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(23)}>History</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(24)}>Politics</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(25)}>Art</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(26)}>Celebrities</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(27)}>Animals</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(28)}>Vehicles</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(29)}>Comics</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(30)}>Gadgets</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(31)}>Japanese Anime & Mang</span>
                    </li>
                    <li>
                        <span onClick={() => setQuizeState(32)}>Cartoon & Animations</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
