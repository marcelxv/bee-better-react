import {
  Box,
  Card,
  CardBody,
  Heading,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ZipCodeStep({
  CEP,
  setCEP,
}: {
  CEP: string;
  setCEP: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [address, setAddress] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const useCEP: any = (cep: string) => {
      useEffect(() => {
        setIsLoading(true);
        axios
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
            setAddress(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [cep]);

    return address;
  };

  return (
    <Box p={4} zIndex="0" mb="150px">
      <Card p="4">
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
          {isLoading ? (
            <Text mt="4">buscando seu endereço</Text>
          ) : (
            <Box>
              <Heading as="h2" size="md" mt="4">
                Logradouro:
              </Heading>
              <Text>{address.logradouro}</Text>
              <Heading as="h2" size="md" mt="4">
                Bairro:
              </Heading>
              <Text>{address.bairro}</Text>
              <Heading as="h2" size="md" mt="4">
                Cidade:
              </Heading>
              <Text>{address.localidade}</Text>
            </Box>
          )}
        </CardBody>
      </Card>

      <Box position="fixed" bottom="0" w="100%" p="2rem" bg="white" zIndex="1">
        <Link to="/activity/reciclagem/selecao">
          <Button
            colorScheme="orange"
            variant="solid"
            disabled={useCEP(CEP).localidade === undefined || CEP.length < 8}
            p="10px 30px"
            m="20px 0"
            onClick={useCEP(CEP)}
          >
            próxima etapa
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
