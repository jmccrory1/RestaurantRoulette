import logo from './logo.gif';
import './App.css';
import NumGenerator from "./numGenerator.js";
import Map from "./map.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Restaurant Roulette
        </h1>
          <NumGenerator />
      </header>
      {/* <Map /> */}
    </div>
  );
}

export default App;
