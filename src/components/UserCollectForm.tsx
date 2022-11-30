import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function UserCollectForm({
  step,
  points,
  setPoints,
}: {
  step: string;
  points: number | undefined;
  setPoints: any;
}) {
  const collectPointContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  };
  const garbageBagContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  const summaryTableStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "200px",
  };

  const summaryTableRowStyle = {
    border: "1px solid black",
    width: "100%",
    height: "100%",
    margin: "1px",
  };

  const totalTableStyle = {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "100%",
    margin: "1px",
  };

  const garbageBagCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    margin: "10px",
    padding: "20px 0",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  const formInputStyle = {
    width: "50px",
    height: "40px",
    margin: "10px",
    padding: "0 0.4em",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
  };

  const [CEP, setCEP] = useState("");
  const [collectPoints, setCollectPoints] = useState([
    {
      id: 1,
      name: "Ponto de Coleta 1",
      address: "Rua 1, 123",
      city: "São Paulo",
      state: "SP",
      CEP: "12345-678",
    },
    {
      id: 2,
      name: "Ponto de Coleta 2",
      address: "Rua 2, 456",
      city: "São Paulo",
      state: "SP",
      CEP: "12345-678",
    },
    {
      id: 2,
      name: "Ponto de Coleta 2",
      address: "Rua 2, 456",
      city: "São Paulo",
      state: "SP",
      CEP: "12345-678",
    },
    {
      id: 8,
      name: "Ecoloja",
      address: "Rua 2, 456",
      city: "São Paulo",
      state: "SP",
      CEP: "12345-678",
    },
    {
      id: 12,
      name: "Ecologia",
      address: "Rua 2, 456",
      city: "São Paulo",
      state: "SP",
      CEP: "12345-678",
    },
    {
      id: 20,
      name: "Ponto de Coleta 44",
      address: "Rua 2, 456",
      city: "São Paulo",
      state: "SP",
      CEP: "12345-678",
    },
  ]);

  const [selectedCollectPoint, setSelectedCollectPoint] = useState({
    id: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    CEP: "",
  });

  const [bagCounter, setBagCounter] = useState(1);

  const [garbageBags, setGarbageBags] = useState([
    {
      id: 1,
      bagType: "",
      bagWeight: 0,
    },
  ]);

  const [totalWeight, setTotalWeight] = useState(0);

  const collectPointStyle = {
    height: "100px",
    padding: "10px",
    backgroundColor: "#fff",
    fontSize: "0.7rem",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "10px",
  };

  const handlePoints = () => {
    setPoints(points as any + totalWeight);
  };

  const handleSelectCollectPoint = (collectPoint: any) => {
    setSelectedCollectPoint(collectPoint);
  };

  const handleGarbageBags = (bagCounter: number) => {
    setBagCounter(bagCounter);
    const garbageBags = [];
    for (let i = 0; i < bagCounter; i++) {
      garbageBags.push({
        id: i,
        bagType: "",
        bagWeight: 0,
      });
    }
    setGarbageBags(garbageBags);
  };

  const handleGarbageBagType = (e: any, bagId: number) => {
    const garbageBagsCopy = [...garbageBags];
    garbageBagsCopy[bagId].bagType = e.target.value;
    setGarbageBags(garbageBagsCopy);
  };

  const handleGarbageBagWeight = (e: any, bagId: number) => {
    const garbageBagsCopy = [...garbageBags];
    garbageBagsCopy[bagId].bagWeight = e.target.value;
    setGarbageBags(garbageBagsCopy);
    setTotalWeight(
      garbageBagsCopy.reduce((acc, bag) => acc + +bag.bagWeight, 0)
    );
  };

  return (
    <div>
      {step === "setCEP" && (
        <div style={collectPointContainerStyle as React.CSSProperties}>
          <h1>Qual o seu CEP?</h1>
          <input
            aria-label="CEP"
            type="text"
            value={CEP}
            onChange={(e) => setCEP(e.target.value)}
          />
          <Link to="/activity/reciclagem/selecao">
            <button>Próximo</button>
          </Link>
        </div>
      )}
      {step === "selecao" && (
        <div style={collectPointContainerStyle as React.CSSProperties}>
          <h1>Selecione o posto de coleta mais próximo</h1>
          <h3>{selectedCollectPoint ? selectedCollectPoint.name : ""}</h3>
          <div style={collectPointContainerStyle as React.CSSProperties}>
            {collectPoints.map((collectPoint) => (
              <div
                key={collectPoint.id}
                onClick={() => handleSelectCollectPoint(collectPoint)}
                style={collectPointStyle as React.CSSProperties}
              >
                <h2>{collectPoint.name}</h2>
                <p>{collectPoint.address}</p>
              </div>
            ))}
          </div>
          <Link to="/activity/reciclagem/formulario">
            <button>Próximo</button>
          </Link>
        </div>
      )}
      {step === "formulario" && (
        <div>
          <div>
            <h3>separação de lixo para reciclagem</h3>
          </div>
          <div>
            <h3>{selectedCollectPoint.name}</h3>
            <span>{selectedCollectPoint.address}</span>
            <span>{selectedCollectPoint.city}</span>
          </div>
          <div>
            <h3>Quantidade de lixo</h3>
            <div>
              <h4>Sacos</h4>
              <input
                style={formInputStyle as React.CSSProperties}
                type="text"
                title="sacos"
                value={bagCounter}
                onChange={() => handleGarbageBags(bagCounter)}
              />
              <button onClick={() => handleGarbageBags(bagCounter + 1)}>
                +
              </button>
              <button onClick={() => handleGarbageBags(bagCounter - 1)}>
                -
              </button>
            </div>
          </div>
          <div>
            <h3>Sacos de lixo</h3>
          </div>
          <div style={garbageBagContainerStyle as React.CSSProperties}>
            {garbageBags.map((garbageBag) => (
              <div
                key={garbageBag.id}
                style={garbageBagCardStyle as React.CSSProperties}
              >
                <h4>Saco {garbageBag.id}</h4>
                <div>
                  <h5>Tipo</h5>
                  <select
                    title="tipo"
                    name="bagType"
                    id="bagType"
                    value={garbageBag.bagType}
                    onChange={(e) => handleGarbageBagType(e, garbageBag.id)}
                  >
                    <option value="">Selecione</option>
                    <option value="papel">Papel</option>
                    <option value="plastico">Plástico</option>
                    <option value="vidro">Vidro</option>
                    <option value="metal">Metal</option>
                    <option value="organico">Orgânico</option>
                  </select>
                </div>
                <div>
                  <h5>Peso</h5>
                  <input
                    style={formInputStyle as React.CSSProperties}
                    type="texto"
                    title="peso"
                    value={garbageBag.bagWeight}
                    onChange={(e) => {
                      handleGarbageBagWeight(e, garbageBag.id);
                    }}
                  />
                  <span>kgs</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/activity/reciclagem/checkout">
            <button>Próximo</button>
          </Link>
        </div>
      )}
      {step === "checkout" && (
        <div>
          <h1>Confirmação</h1>
          <h3>{selectedCollectPoint.name}</h3>
          <span>{selectedCollectPoint.address}</span>
          <span>{selectedCollectPoint.city}</span>
          <div>
            <h3>Quantidade de lixo</h3>
            <div>
              <span>{bagCounter} sacos</span>
              <table style={summaryTableStyle as React.CSSProperties}>
                {garbageBags.map((garbageBag) => (
                  <tr
                    key={garbageBag.id}
                    style={summaryTableRowStyle as React.CSSProperties}
                  >
                    <td>{garbageBag.bagType}</td>
                    <td>{garbageBag.bagWeight} kgs</td>
                  </tr>
                ))}
                <td style={totalTableStyle as React.CSSProperties}>
                  Total {totalWeight} kgs
                </td>
              </table>
              <Link to="/activity/reciclagem/confirmacao">
                <button>Próximo</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {step === "confirmacao" && (
        <div>
          <h1>Confirmação</h1>
          <p>
            Agora é só aguardar a confirmação do Ponto de Coleta para receber
            seus pontos!
          </p>
          <Link to="/activity/reciclagem">
            <button onClick={handlePoints}>Confirmar</button>
          </Link>
        </div>
      )}
    </div>
  );
}
