import { useState } from "react";

export default function UserCoinCounter() {
  const [userCoins, setUserCoins] = useState(30);

  const beeCoinsDebtStyle = {
    position: "fixed",
    bottom: "0",
    padding: "1rem",
    width: "100%",
    backgroundColor: "#FFC62A",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <span style={beeCoinsDebtStyle as React.CSSProperties}>
        Seu saldo é de: {userCoins} beecoins
      </span>
    </div>
  );
}
