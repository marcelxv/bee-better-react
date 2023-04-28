import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

function BackButton() {
  if (useLocation().pathname === '/') {
    return null;
  }


  return (
    <Box>
      <Button
        onClick={() => window.history.back()}
        colorScheme="orange"
        variant="outline"
        size="sm"
        mt="4"
        mr="4"
      >
        voltar
      </Button>
    </Box>
  );
}

export default BackButton;
