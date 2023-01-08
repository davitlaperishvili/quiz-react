import React, { useEffect } from "react";
import GetQuestions from "../../server/GetQuestions";
import QuizeCategories from "../QuizeCategories/QuizeCategories";
import { useDispatch, useSelector } from "react-redux";
import { changeQuize } from "../../redux/actions";
import "./MainContainer.scss";
import QuizeQuestionsList from "../Quize/QuizeQuestionsList";

export default function MainContainer() {
    const state = useSelector((state) => state);
    return <div className="main_container">{state.quizeParams.params.category ? <QuizeQuestionsList /> : <QuizeCategories />}</div>;
}
