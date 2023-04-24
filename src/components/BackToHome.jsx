import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Button,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';

function BackToHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  if (useLocation().pathname === '/') {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: '0', right: '0', margin: '1rem' }}>
      <Button onClick={onOpen}>🏠</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              voltar para a página inicial?
            </AlertDialogHeader>

            <AlertDialogBody>
              você tem certeza? Você não poderá desfazer essa ação depois.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                cancelar
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                <Link to="/">voltar</Link>
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default BackToHome;
