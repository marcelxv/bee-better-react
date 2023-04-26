import {
  Box,
  Card,
  CardBody,
  Heading,
  Input,
  Button,
  Text,
  Spinner,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lowerText } from '../../utils/lowerText';
import ContinueButton from '../ContinueButton';

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
  const [isValid, setIsValid] = useState(false);

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    if (CEP.length === 8) {
      setIsLoading(true);
      axios
        .get(`https://viacep.com.br/ws/${CEP}/json/`)
        .then((response) => {
          if (response.data.erro) {
            toast.error('CEP não encontrado');
            setIsLoading(false);
            setAddress({ logradouro: '', bairro: '', localidade: '' });
            return;
          }
          setTimeout(() => {
            setAddress({
              logradouro: lowerText(response.data.logradouro),
              bairro: lowerText(response.data.bairro),
              localidade: lowerText(response.data.localidade),
            });
            toast.success('CEP encontrado');
            setIsLoading(false);
            setIsValid(true);
          }, 2000);
        })
        .catch((err) => {
          toast.error('CEP não encontrado');
          setIsLoading(false);
          setAddress({ logradouro: '', bairro: '', localidade: '' });
        });
    }
  }, [CEP]);

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
        </CardBody>
      </Card>
      {isLoading ? (
        <Spinner mt="4" />
      ) : (
        <>
          <Card>
            <CardBody>
              <Text mt="4">
                <strong>logradouro:</strong> {address.logradouro}
              </Text>
              <Text mt="4">
                <strong>bairro:</strong> {address.bairro}
              </Text>
              <Text mt="4">
                <strong>cidade:</strong> {address.localidade}
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Heading as="h3" size="md" mt="4">
                pontos encontrados
              </Heading>
              <Text mt="4">
                foram encontrados <strong>{randomNumber}</strong> pontos de coleta próximos a
                você
              </Text>
            </CardBody>
          </Card>
        </>
      )}
      <ToastContainer />
      <ContinueButton isValid={isValid} link="/activity/reciclagem/selecao" />
    </Box >
  );
}

