import {
  Box,
  Heading,
  Text,
  Card,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ContinueButton from '../ContinueButton';

export default function CheckoutStep({
  garbageBags,
  selectedCollectPoint,
}: {
  garbageBags: Array<any>;
  selectedCollectPoint: any;
}) {
  return (
    <Box p={4} zIndex="0" mb="150px">
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
        <ContinueButton isValid={true} link="/activity/reciclagem/confirmacao" />
      </Box>
    </Box>
  );
}
