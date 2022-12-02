import { Card, CardBody, Heading, Input, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ZipCodeStep({
  CEP,
  setCEP,
}: {
  CEP: string;
  setCEP: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
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
  );
}
