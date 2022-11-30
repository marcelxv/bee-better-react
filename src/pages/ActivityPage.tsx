import UserCoinCounter from "../components/UserCoinCounter";
import UserCollectForm from "../components/UserCollectForm";
import { useState } from "react";

export default function ActivityPage({
  pageType,
  step,
}: {
  pageType: string;
  step: string;
}) {
  const activityPageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5F5",
  };

  const [points, setPoints] = useState(0);

  const reciclagemPageMount = () => {
    if (pageType === "reciclagem") {
      return (
        <div>
          <UserCollectForm step={step} points={points} setPoints={setPoints} />
        </div>
      );
    }
  };
  return (
    <div style={activityPageContainerStyle as React.CSSProperties}>
      {reciclagemPageMount()}
      <UserCoinCounter points={points} />
    </div>
  );
}
