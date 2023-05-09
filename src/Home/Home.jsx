import Displaytodos from "../components/Displaytodos";
import Todos from "../components/Todos";
import "../App.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <NavLink to="/Other">Other Page</NavLink>
      <div className="todos">
        <Todos />
        <Displaytodos />
      </div>
    </div>
  );
}

export default Home;
