import "./App.css";
import { useState } from "react";
import UpgradingSystem from "./components/UpgradingSystem";
import upgrades from "./data/Upgrades";

function App() {
  let [counter, setCounter] = useState(0);
  let [points, setPoints] = useState(0);
  let [upgrade, setUpgrade] = useState(1);

  const handleClick = () => {
    setCounter(counter + upgrade);
    setPoints(points + upgrade);
  };

  let upgradeArray = upgrades.map((upgrades) => (
    <UpgradingSystem setUpgrade={setUpgrade} upgrade={upgrades} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h4>Points = {points}</h4>
        <h1>{counter} Bags of Trash Picked Up</h1>
        <button onClick={handleClick}>Pick Up Trash</button>
        <div>{upgradeArray}</div>
      </header>
    </div>
  );
}

export default App;
