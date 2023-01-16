import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { changeQuizeParams } from "../../redux/actions";
import "./chooseDifficulity.scss";
const options = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
export default function ChooseDifficulity() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(state);
  });
  function handleClick(e) {
    const quizParams = {
      params: {
        ...state.quizeParams.params,
        difficulty: e.value,
      },
    };
    dispatch(changeQuizeParams(quizParams));
  }
  return (
    <div className="choose_difficulity">
      {/* <select
        name="difficulity"
        id=""
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> */}
      <Select
        defaultValue={[options[0]]}
        name="difficulity"
        options={options}
        className="select_difficulity"
        classNamePrefix="difficulity"
        onChange={(e) => {
          handleClick(e);
        }}
      />
    </div>
  );
}
