import { useState } from "react";

export default function UserCoinCounter({ points }: { points: number }) {

  const beeCoinsDebtStyle = {
    position: "fixed",
    bottom: "0",
    right: "0",
    padding: "1rem",
    width: "80px",
    backgroundColor: "#FFC62A",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    
  };

  return (
    <div>
      <div style={beeCoinsDebtStyle as React.CSSProperties}>
        Seu saldo é de: {points} beecoins
      </div>
    </div>
  );
}
