import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainFram from "./routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainFram />
      </BrowserRouter>
    </div>
  );
}

export default App;
