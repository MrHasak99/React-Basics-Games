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
        <h2 className="Points">Total Trashbags Picked Up = {counter}</h2>
        <h1 className="Score">{points} Trashbags Picked Up</h1>
        <h2>Bags of Trash Picked Up Per Click: {upgrade}</h2>
        <button onClick={handleClick}>Pick Up Trash</button>
        <div>{updatedUpgradeList}</div>
      </header>
    </div>
  );
}

export default App;
