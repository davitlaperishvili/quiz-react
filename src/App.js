import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContainer from "./components/MainContainer/MainContainer";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import FinishQuiz from "./components/Quize/FinishQuiz/FinishQuiz";
import { changeQuizeParams, changeQuize } from "./redux/actions";
import { quizIsFinished } from "./components/Quize/FinishQuiz/FinishQuiz";
import { useEffect } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    if (quizIsFinished(state).isFinished) {
      console.log(quizIsFinished(state).isFinished);
      dispatch(changeQuize({ finished: true, modalIsOpen: true })); // update state
    }
  }, [state.quizeParams]);
  function goBack() {
    // go back to initial state and category listing
    dispatch(changeQuize({ modalIsOpen: false }));
    // localStorage.removeItem("currentQuiz");
  }

  function renderFinishModal() {
    if (quizIsFinished(state).isFailed) {
      return (
        <FinishQuiz
          status="failed"
          text="You Failed"
        />
      );
    } else {
      return (
        <FinishQuiz
          status="success"
          text="You Pass"
        />
      );
    }
  }
  Modal.setAppElement("#root");
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="App">
        <MainContainer />
        <Modal
          isOpen={state.quize.modalIsOpen}
          //onAfterOpen={afterOpenModal}
          style={customStyles}
          onRequestClose={goBack}
          contentLabel="Example Modal"
        >
          {renderFinishModal()}
        </Modal>
      </div>
    </>
  );
}

export default App;
