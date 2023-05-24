import { useToast, Button } from '@chakra-ui/react';
import { stringify } from 'querystring';
import { useLocation } from 'react-router-dom';

export default function UserCoinCounter({ user }: { user: any }) {
  const toast = useToast();

  return (
    <div style={{ position: 'fixed', bottom: '0', left: '0', margin: '1rem' }}>
      <Button
        onClick={() =>
          toast({
            title: 'Seu saldo de beecoins',
            description: `Você tem ${user.points} beecoins`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        {useLocation().pathname === '/' ? `Saldo: ${ user.points }` : 'Ver saldo'}
      </Button>
    </div>
  );
}
