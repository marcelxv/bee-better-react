import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserCollectForm({ step }: { step: string }) {
  const garbageBagContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: "100%",
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

  const collectPointStyle = {
    width: "100%",
    height: "100px",
    padding: "2rem 2rem",
    backgroundColor: "#fff",
    fontSize: "0.7rem",
    cursor: "pointer",
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

  return (
    <div>
      {step === "setCEP" && (
        <div>
          <h1>Qual o seu CEP?</h1>
          <input
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
        <div style={collectPointStyle as React.CSSProperties}>
          <h1>Selecione o posto de coleta mais próximo</h1>
          <h3>{selectedCollectPoint ? selectedCollectPoint.name : ""}</h3>
          {collectPoints.map((collectPoint) => (
            <div
              key={collectPoint.id}
              onClick={() => handleSelectCollectPoint(collectPoint)}
            >
              <h2>{collectPoint.name}</h2>
              <p>{collectPoint.address}</p>
            </div>
          ))}
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
                    name="bagType"
                    id="bagType"
                    value={garbageBag.bagType}
                    onChange={() => console.warn("change")}
                  >
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
                    type="text"
                    title="peso"
                    value={garbageBag.bagWeight}
                    onChange={() => console.warn("change")}
                  />
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
