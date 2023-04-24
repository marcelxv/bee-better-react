import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

function BackButton() {
  if (useLocation().pathname === '/') {
    return null;
  }


  return (
    <div style={{ position: 'fixed', top: '0', left: '0', margin: '1rem' }}>
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
    </div>
  );
}

export default BackButton;
