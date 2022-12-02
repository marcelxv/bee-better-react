import {
  SimpleGrid,
  Badge,
  Box,
  Button,
  Select,
  Card,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function GarbageBagStep({
  garbageBags,
  handleGarbageBags,
  handleGarbageBagWeight,
  handleGarbageBagTypeColor,
  handleGarbageBagType,
  isValid,
  selectedCollectPoint,
  bagCounter,
}: {
  garbageBags: Array<any>;
  handleGarbageBags: any;
  handleGarbageBagWeight: any;
  handleGarbageBagTypeColor: any;
  handleGarbageBagType: any;
  isValid: boolean;
  selectedCollectPoint: any;
  bagCounter: number;
}) {
  return (
    <Box p={4} zIndex="0" mb="150px">
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
            <NumberIncrementStepper onClick={() => handleGarbageBags('add')} />
            <NumberDecrementStepper
              onClick={() => handleGarbageBags('remove')}
            />
          </NumberInputStepper>
        </NumberInput>
      </Box>
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
      <Box position="fixed" bottom="0" w="100%" p="2rem" bg="white" zIndex="1">
      <Link to="/activity/reciclagem/checkout">
        <Button colorScheme="orange" variant="solid" disabled={!isValid}>
          próxima etapa
        </Button>
      </Link>
      </Box>
    </Box>
  );
}
