import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContainer from "./components/MainContainer/MainContainer";
function App() {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="App">
                <MainContainer />
            </div>
        </>
    );
}

export default App;
