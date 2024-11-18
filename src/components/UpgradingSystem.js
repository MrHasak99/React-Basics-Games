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
      <div>
        <h3>{upgrades.name}</h3>
        <button disabled={points < upgrades.price} onClick={handleClick}>
          Click for {upgrades.price}
        </button>
      </div>
    );
  }
};

export default UpgradingSystem;
