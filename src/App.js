import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContainer from "./components/MainContainer/MainContainer";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import FinishQuiz from "./components/Quize/FinishQuiz/FinishQuiz";
import { changeQuizeParams } from "./redux/actions";
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
    let state = useSelector((state) => {
        return state;
    });
    function goBack() {
        // go back to initial state and category listing
        dispatch(changeQuizeParams({ params: { difficulty: "easy" } }));
        localStorage.removeItem("currentQuiz");
    }
    Modal.setAppElement("#root");
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="App">
                <MainContainer />
                <Modal
                    isOpen={state.quizeParams.quiz && state.quizeParams.params.category && state.quizeParams.quiz.lives <= 0}
                    //onAfterOpen={afterOpenModal}
                    style={customStyles}
                    onRequestClose={goBack}
                    contentLabel="Example Modal"
                >
                    <FinishQuiz status="success" text="You Failed" />
                </Modal>
            </div>
        </>
    );
}

export default App;
