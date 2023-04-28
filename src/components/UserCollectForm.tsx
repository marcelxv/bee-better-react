import { useState, useEffect } from 'react';
import {
  Box,
} from '@chakra-ui/react';

import ZipCodeStep from './form-steps/ZipCodeStep';
import CollectPointStep from './form-steps/CollectPointStep';
import GarbageBagStep from './form-steps/GarbageBagStep';
import CheckoutStep from './form-steps/CheckoutStep';
import ConfirmationStep from './form-steps/ConfirmationStep';

export default function UserCollectForm({
  step,
  points,
  setPoints,
}: {
  step: string;
  points: number | undefined;
  setPoints: any;
}) {
  const [CEP, setCEP] = useState('');
  const [collectPoints, setCollectPoints] = useState([
    {
      id: 1,
      name: 'ponto de coleta 1',
      address: 'rua 1, 123',
      city: 'são paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 2,
      name: 'ponto de coleta 2',
      address: 'rua 2, 456',
      city: 'são paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 3,
      name: 'ponto de coleta 2',
      address: 'rua 2, 456',
      city: 'são paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 8,
      name: 'ecoloja pinheiros',
      address: 'rua 2, 456',
      city: 'são paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 12,
      name: 'echologia',
      address: 'rua 2, 456',
      city: 'são paulo',
      state: 'SP',
      CEP: '12345-678',
    },
    {
      id: 20,
      name: 'ponto de coleta 44',
      address: 'rua 2, 456',
      city: 'são paulo',
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

  const handlePoints = () => {
    const clearAllState = () => {
      setCEP('');
      setSelectedCollectPoint({
        id: 0,
        name: '',
        address: '',
        city: '',
        state: '',
        CEP: '',
      });
      setBagCounter(1);
      setGarbageBags([
        {
          id: 0 as number,
          bagType: '' as string,
          bagWeight: 0 as number,
        },
      ]);
      setTotalWeight(0);
    };
    clearAllState();
    setPoints((points as any) + totalWeight);
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
    } else if (action === 'remove' && garbageBags.length > 1) {
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
    garbageBagsCopy[bagId].bagWeight = e as number;
    setGarbageBags(garbageBagsCopy);
    setTotalWeight(
      Math.round(
        garbageBagsCopy.reduce((acc: number, bag: any) => {
          return acc + +bag.bagWeight;
        }, 0) * 100
      ) / 100
    );
  };

  const handleGarbageBagTypeColor = (bagType: string) => {
    switch (bagType) {
      case 'papel':
        return 'blue';
      case 'plastico':
        return 'red';
      case 'vidro':
        return 'green';
      case 'metal':
        return 'yellow';
      case 'organico':
        return 'maroon';
      case 'não-reciclavel':
        return 'gray';
      default:
        return 'orange';
    }
  };

  useEffect(() => {
    const allBagsHaveParams = garbageBags.every(
      (bag) => bag.bagType && bag.bagWeight > 0
    );
    setIsValid(allBagsHaveParams);
  }, [garbageBags]);

  return (
    <Box w="100%" h="100%" bg="white" borderRadius="10px" p="20px">
      {step === 'setCEP' && (
        <ZipCodeStep CEP={CEP} setCEP={setCEP}/>
      )}
      {step === 'selecao' && (
        <CollectPointStep collectPoints={collectPoints} setSelectedCollectPoint={setSelectedCollectPoint} selectedCollectPoint={selectedCollectPoint} />
      )}
      {step === 'formulario' && (
        <GarbageBagStep garbageBags={garbageBags} handleGarbageBags={handleGarbageBags} handleGarbageBagType={handleGarbageBagType} handleGarbageBagWeight={handleGarbageBagWeight} handleGarbageBagTypeColor={handleGarbageBagTypeColor} isValid={isValid} selectedCollectPoint={selectedCollectPoint} bagCounter={bagCounter} />
      )}
      {step === 'checkout' && (
       <CheckoutStep garbageBags={garbageBags} selectedCollectPoint={selectedCollectPoint} />
      )}
      {step === 'confirmacao' && (
        <ConfirmationStep handlePoints={handlePoints} />
      )}
    </Box>
  );
}
