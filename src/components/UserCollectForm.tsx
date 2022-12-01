import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  Badge,
  Box,
  Button,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Heading,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from '@chakra-ui/react';

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

  const [selectedCollectPoint, setselectedCollectPoint] = useState({
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
      setselectedCollectPoint({
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

  const handleSelectCollectPoint = (collectPoint: any) => {
    setselectedCollectPoint(collectPoint);
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
    <Box w="360px" h="100%" m="0 auto">
      {step === 'setCEP' && (
        <Card w="100%" h="100%" p="4">
          <CardBody>
            <Heading as="h1" size="lg" mt="4">
              informe seu CEP
            </Heading>
            <Text mt="4">para encontrar pontos de coleta próximos a você</Text>
            <Input
              aria-label="CEP"
              type="number"
              value={CEP}
              onChange={(e) => setCEP(e.target.value)}
              mt="4"
            />
            <Link to="/activity/reciclagem/selecao">
              <Button
                colorScheme="orange"
                variant="solid"
                disabled={!CEP || CEP.length < 8}
                p="10px 30px"
                m="20px 0"
              >
                próxima etapa
              </Button>
            </Link>
          </CardBody>
        </Card>
      )}
      {step === 'selecao' && (
        <div>
          <Heading as="h1" size="lg" mt="4">
            posto de coleta
          </Heading>
          <Text mt="4">selecione o posto de coleta mais próxima etapa</Text>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {collectPoints.map((collectPoint) => (
              <Card
                mt="5"
                key={collectPoint.id}
                onClick={() => handleSelectCollectPoint(collectPoint)}
                bg={
                  selectedCollectPoint.id === collectPoint.id
                    ? 'orange.200'
                    : 'white'
                }
                variant={
                  selectedCollectPoint.id === collectPoint.id
                    ? 'filled'
                    : 'outline'
                }
              >
                <CardBody>
                  <h2>{collectPoint.name}</h2>
                  <p>{collectPoint.address}</p>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="orange"
                    variant="solid"
                    onClick={() => handleSelectCollectPoint(collectPoint)}
                    disabled={selectedCollectPoint.id === collectPoint.id}
                  >
                    selecionar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          <Link to="/activity/reciclagem/formulario">
            <Button colorScheme="orange" variant="solid">
              próxima etapa
            </Button>
          </Link>
        </div>
      )}
      {step === 'formulario' && (
        <Box p={4}>
          <Box>
            <Heading as="h1" size="lg" mt="4">
              monte sua coleta
            </Heading>
            <Text mt="4">
              selecione os tipos de resíduos e suas respectivas quantidades
            </Text>
          </Box>
          <Card w="100%" h="100%" p="4" mt="4">
            <Stat>
              <StatLabel>{selectedCollectPoint.name}</StatLabel>
              <StatNumber>{selectedCollectPoint.city}</StatNumber>
              <StatHelpText>{selectedCollectPoint.address}</StatHelpText>
            </Stat>
          </Card>
          <Box mt={4}>
            <Heading as="h2" size="md" mt="4">
              sacos de resíduos
            </Heading>
            <NumberInput value={bagCounter} min={1} max={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper
                  onClick={() => handleGarbageBags('add')}
                />
                <NumberDecrementStepper
                  onClick={() => handleGarbageBags('remove')}
                />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <div>
          </div>
          <SimpleGrid
            mt={6}
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {garbageBags.map((garbageBag) => (
              <Card
                key={garbageBag.id}
                px={4}
                py={4}
                overflow="hidden"
                variant="outline"
              >
                <h4>Saco</h4>
                <Badge
                  variant="solid"
                  colorScheme={handleGarbageBagTypeColor(garbageBag.bagType)}
                >
                  {garbageBag.bagType || 'Tipo'}
                </Badge>
                <div>
                  <label htmlFor="bagType">Tipo</label>
                  <Select
                    title="tipo"
                    name="bagType"
                    id="bagType"
                    value={garbageBag.bagType}
                    onChange={(e) => handleGarbageBagType(e, garbageBag.id)}
                    required
                  >
                    <option value="">selecione</option>
                    <option value="papel">Papel</option>
                    <option value="plastico">Plástico</option>
                    <option value="vidro">Vidro</option>
                    <option value="metal">Metal</option>
                    <option value="organico">Orgânico</option>
                  </Select>
                </div>
                <div>
                  <label htmlFor="bagWeight">Peso</label>
                  <NumberInput
                    value={garbageBag.bagWeight}
                    min={0.1}
                    max={10}
                    step={0.1}
                    onChange={(e) => {
                      handleGarbageBagWeight(e, garbageBag.id);
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <span>kgs</span>
                </div>
              </Card>
            ))}
          </SimpleGrid>
          <Link to="/activity/reciclagem/checkout">
            <Button colorScheme="orange" variant="solid" disabled={!isValid}>
              próxima etapa
            </Button>
          </Link>
        </Box>
      )}
      {step === 'checkout' && (
        <Box p={4}>
          <Heading as="h1" size="lg" mt="4">
            checkout
          </Heading>
          <Text>confira os dados da sua coleta</Text>
          <Card w="100%" h="100%" p="4" bg="orange.500" color="white" mt={4}>
            <Stat>
              <StatLabel>{selectedCollectPoint.name}</StatLabel>
              <StatNumber>{selectedCollectPoint.city}</StatNumber>
              <StatHelpText>{selectedCollectPoint.address}</StatHelpText>
            </Stat>
          </Card>
          <Box mt={4}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Tipo</Th>
                    <Th>Peso</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {garbageBags.map((garbageBag) => (
                    <Tr key={garbageBag.id}>
                      <Td>{garbageBag.bagType}</Td>
                      <Td>{garbageBag.bagWeight}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Link to="/activity/reciclagem/confirmacao">
              <Button colorScheme="orange" variant="solid">
                próxima etapa
              </Button>
            </Link>
          </Box>
        </Box>
      )}
      {step === 'confirmacao' && (
        <Box p={4}>
          <Heading as="h1" size="lg" mt="4">
            confirmação / resgatar pontos
          </Heading>
          <Text mt={4}>
            agora é só aguardar a confirmação do ponto de coleta para receber
            seus pontos!
          </Text>
          <Link to="/">
            <Button
              colorScheme="orange"
              variant="solid"
              onClick={handlePoints}
              mt={5}
            >
              Confirmar
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
