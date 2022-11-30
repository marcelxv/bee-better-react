import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  };
  const garbageBagContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  const summaryTableStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '200px',
  };

  const summaryTableRowStyle = {
    border: '1px solid black',
    width: '100%',
    height: '100%',
    margin: '1px',
  };

  const totalTableStyle = {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
    margin: '1px',
  };

  const formInputStyle = {
    width: '50px',
    height: '40px',
    margin: '10px',
    padding: '0 0.4em',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#F5F5F5',
  };

  const [CEP, setCEP] = useState('');
  const [collectPoints, setCollectPoints] = useState([
    {
      id: 1,
      name: 'Ponto de Coleta 1',
      address: 'Rua 1, 123',
      city: 'São Paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 2,
      name: 'Ponto de Coleta 2',
      address: 'Rua 2, 456',
      city: 'São Paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 3,
      name: 'Ponto de Coleta 2',
      address: 'Rua 2, 456',
      city: 'São Paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 8,
      name: 'Ecoloja',
      address: 'Rua 2, 456',
      city: 'São Paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 12,
      name: 'Ecologia',
      address: 'Rua 2, 456',
      city: 'São Paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 20,
      name: 'Ponto de Coleta 44',
      address: 'Rua 2, 456',
      city: 'São Paulo',
      state: 'SP',
      CEP: '12345-678',
    },
  ]);

  const [selectedCollectPoint, setSelectedCollectPoint] = useState({
    id: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    CEP: '',
  });

  const [bagCounter, setBagCounter] = useState(1);

  const [isValid, setIsValid] = useState(false);

  const [garbageBags, setGarbageBags] = useState([
    {
      id: 0 as number,
      bagType: '' as string,
      bagWeight: 0 as number,
    },
  ]);

  const [totalWeight, setTotalWeight] = useState(0);

  const collectPointStyle = {
    height: '100px',
    padding: '10px',
    backgroundColor: '#fff',
    fontSize: '0.7rem',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '10px',
  };

  const handlePoints = () => {
    setPoints((points as any) + totalWeight);
  };

  const handleSelectCollectPoint = (collectPoint: any) => {
    setSelectedCollectPoint(collectPoint);
  };

  const handleGarbageBags = (action: string) => {
    if (action === 'add') {
      setBagCounter(bagCounter + 1);
      setGarbageBags([
        ...garbageBags,
        {
          id: bagCounter,
          bagType: '',
          bagWeight: 0,
        },
      ]);
    } else if (action === 'remove') {
      setBagCounter(bagCounter ? bagCounter - 1 : 0);
      setGarbageBags(garbageBags.slice(0, garbageBags.length - 1));
    }
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
      Math.round(
        garbageBagsCopy.reduce((acc: number, bag: any) => {
          return acc + +bag.bagWeight;
        }, 0) * 100
      ) / 100
    );
  };

  const handleGarbageCardStyle = (bagType: string) => {
    const bagTypeStyle = {
      backgroundColor: '#F5F5F5',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      padding: '10px 30px',
      margin: '10px',
    };

    switch (bagType) {
      case 'papel':
        return {
          ...bagTypeStyle,
          backgroundColor: 'yellow',
        };
      case 'plastico':
        return {
          ...bagTypeStyle,
          backgroundColor: 'blue',
          color: 'white',
        };
      default:
        return {
          ...bagTypeStyle,
        };
    }
  };

  useEffect(() => {
    const allBagsHaveParams = garbageBags.every(
      (bag) => bag.bagType && bag.bagWeight > 0
    );
    setIsValid(allBagsHaveParams);
  }, [garbageBags]);

  return (
    <div>
      {step === 'setCEP' && (
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
      {step === 'selecao' && (
        <div style={collectPointContainerStyle as React.CSSProperties}>
          <h1>Selecione o posto de coleta mais próximo</h1>
          <h3>{selectedCollectPoint ? selectedCollectPoint.name : ''}</h3>
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
      {step === 'formulario' && (
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
                type="number"
                min="0"
                step="1"
                title="sacos"
                value={bagCounter}
              />
              <button onClick={() => handleGarbageBags('add')}>+</button>
              <button onClick={() => handleGarbageBags('remove')}>-</button>
            </div>
          </div>
          <div>
            <h3>Sacos de lixo</h3>
          </div>
          <div style={garbageBagContainerStyle as React.CSSProperties}>
            {garbageBags.map((garbageBag) => (
              <div
                key={garbageBag.id}
                style={handleGarbageCardStyle(garbageBag.bagType)}
              >
                <h4>Saco</h4>
                <div>
                  <label htmlFor="bagType">Tipo</label>
                  <select
                    title="tipo"
                    name="bagType"
                    id="bagType"
                    value={garbageBag.bagType}
                    onChange={(e) => handleGarbageBagType(e, garbageBag.id)}
                    required
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
                  <label htmlFor="bagWeight">Peso</label>
                  <input
                    style={formInputStyle as React.CSSProperties}
                    type="number"
                    step="0.1"
                    min="0"
                    title="peso"
                    name="bagWeight"
                    id="bagWeight"
                    value={garbageBag.bagWeight}
                    onChange={(e) => {
                      handleGarbageBagWeight(e, garbageBag.id);
                    }}
                    required
                  />
                  <span>kgs</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/activity/reciclagem/checkout">
            <button disabled={!isValid}>Próximo</button>
          </Link>
        </div>
      )}
      {step === 'checkout' && (
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
      {step === 'confirmacao' && (
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
