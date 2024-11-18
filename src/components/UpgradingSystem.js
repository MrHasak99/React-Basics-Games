import React from "react";

const UpgradingSystem = ({
  setUpgrade,
  upgrades,
  upgrade,
  deleteUpgrade,
  setPoints,
  points,
}) => {
  const handleClick = () => {
    if (points >= upgrades.price) {
      setUpgrade(upgrade + upgrades.price);
      deleteUpgrade(upgrades.id);
      setPoints(points - upgrades.price);
    }
  };

  if (points >= upgrades.price) {
    return (
      <div className="Upgrades" disabled={points < upgrades.price} onClick={handleClick}>
        <h3>{upgrades.name}</h3>
        <h4>{upgrades.price} points</h4>
      </div>
    );
  }
};

export default UpgradingSystem;
