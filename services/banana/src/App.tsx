import logo from "./logo.svg";
import "./App.css";
import { sum } from "pfm-helpers";

function App() {
  console.log("sum :>> ", sum(10, 100));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          banana
        </a>
      </header>
    </div>
  );
}

export default App;
