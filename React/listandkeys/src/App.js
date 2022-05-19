import "./App.css";
import Templates from "./Components/Templates";
import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <div className="App">
      <div id="todoApp">
        <TodoApp />
      </div>

      <div>
        {" "}
        <Templates />{" "}
      </div>
    </div>
  );
}

export default App;
