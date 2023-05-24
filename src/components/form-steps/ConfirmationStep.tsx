import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ContinueButton from '../ContinueButton';

export default function ConfirmationStep({
  handlePoints,
}: {
  handlePoints: any;
}) {
  return (
    <Box p={4} zIndex="0" mb="150px">
      <Heading as="h1" size="lg" mt="4">
        confirmação / resgatar pontos
      </Heading>
      <Text mt={4}>
        agora é só aguardar a confirmação do ponto de coleta para receber seus
        pontos!
      </Text>
      <ContinueButton isValid={true} link="/home" onClick={handlePoints} />
    </Box>
  );
}
