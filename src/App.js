import "./App.css";
import { useState } from "react";
import UpgradingSystem from "./components/UpgradingSystem";
import upgrades from "./data/Upgrades";

function App() {
  let [counter, setCounter] = useState(0);
  let [points, setPoints] = useState(0);
  const [upgrade, setUpgrade] = useState(1);
  const [upgradeList, setUpgradeList] = useState(upgrades);

  const deleteUpgrade = (id) => {
    const newList = upgradeList.filter((upgrade) => upgrade.id !== id);
    setUpgradeList(newList);
  };

  const updatedUpgradeList = upgradeList.map((upgrades) => (
    <UpgradingSystem
      setUpgrade={setUpgrade}
      upgrades={upgrades}
      upgrade={upgrade}
      deleteUpgrade={deleteUpgrade}
      points={points}
      setPoints={setPoints}
    />
  ));

  const handleClick = () => {
    setCounter(counter + upgrade);
    setPoints(points + upgrade);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Points = {points}</h4>
        <h1>{counter} Bags of Trash Picked Up</h1>
        <button onClick={handleClick}>Pick Up Trash</button>
        <h2>{upgrade} bags of trash picked up per click</h2>
        <div>{updatedUpgradeList}</div>
      </header>
    </div>
  );
}

export default App;
