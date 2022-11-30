import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-beebetter.svg";

export default function HomePage() {
  const containerStyle = {
    backgroundColor: "#FFC62A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    margin: "0",
  };

  const activityGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
  };

  const activityItemStyle = {
    width: "100px",
    height: "100px",
    padding: "2rem 2rem",
    border: "1px solid #ccc",
    borderRadius: "100%",
    backgroundColor: "#fff",
    fontSize: "0.7rem",
    cursor: "pointer",
  };

  const [user, setUser] = useState({ name: "john doe" });
  const [activity, setActivity] = useState([
    {
      id: 1,
      name: "cultivo em horta doméstica",
      description: "cultivo de hortaliças em horta doméstica",
      link: "/activity/horta",
    },
    {
      id: 2,
      name: "separação de lixo para reciclagem",
      description: "separação de lixo para reciclagem",
      link: "/activity/reciclagem",
    },
    {
      id: 3,
      name: "hábitos alimentares saúdaveis",
      description: "hábitos alimentares saúdaveis",
      link: "/activity/alimentacao",
    },
    {
      id: 4,
      name: "práticas de atividades físicas",
      description: "práticas de atividades físicas",
      link: "/activity/atividades-fisicas",
    },
    {
      id: 5,
      name: "participação em projetos de voluntáriado",
      description: "participação em projetos de voluntáriado",
      link: "/activity/voluntariado",
    },
  ]);

  return (
    <div style={containerStyle as React.CSSProperties}>
      <img src={Logo} alt="logo beebetter" style={{ width: "100px" }} />
      <div>
        <h1>olá, {user.name}!</h1>
        <p>escolha uma atividade para começar a ganhar beecoins!</p>
      </div>
      <div style={activityGridStyle as React.CSSProperties}>
        {activity.map((activity) => (
          <Link to={activity.link} key={activity.id}>
            <div
              key={activity.id}
              style={activityItemStyle as React.CSSProperties}
            >
              <h2>{activity.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
