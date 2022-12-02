import { Box, Heading, SimpleGrid, Card, CardBody, CardFooter, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CollectPointStep({ collectPoints, selectedCollectPoint, setSelectedCollectPoint } : {
    collectPoints: Array<any>;
    setSelectedCollectPoint: React.Dispatch<React.SetStateAction<any>>;
    selectedCollectPoint: any;
}) {


  const handleSelectCollectPoint = (collectPoint: any) => {
    setSelectedCollectPoint(collectPoint);
  };

  return (
    <Box p={4} zIndex="0" mb="150px">
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
              selectedCollectPoint.id === collectPoint.id ? 'filled' : 'outline'
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
      <Box position="fixed" bottom="0" w="100%" p="2rem" bg="white" zIndex="1">
      <Link to="/activity/reciclagem/formulario">
        <Button colorScheme="orange" variant="solid" disabled={selectedCollectPoint.id === 0}>
          próxima etapa
        </Button>
      </Link>
    </Box>
    </Box>
  );
}
