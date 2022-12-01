import { useToast, Button } from '@chakra-ui/react';
import { stringify } from 'querystring';
import { useLocation } from 'react-router-dom';

export default function UserCoinCounter({ points }: { points: number }) {
  const toast = useToast();

  return (
    <div style={{ position: 'fixed', bottom: '0', right: '0', margin: '1rem' }}>
      <Button
        onClick={() =>
          toast({
            title: 'Seu saldo de beecoins',
            description: `Você tem ${points} beecoins`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        {useLocation().pathname === '/' ? `Saldo: ${ points }` : 'Ver saldo'}
      </Button>
    </div>
  );
}
