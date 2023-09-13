import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes";
import { ContextProvider } from "./contexts/UserContext";
import "./App.css";
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ToastContainer></ToastContainer>
        <Global></Global>
        <RouterMain></RouterMain>
      </ContextProvider>
    </div>
  );
}

export default App;
