import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import UserCoinCounter from './UserCoinCounter';
import { Link, useLocation } from 'react-router-dom';

function HamburgerMenu({ points }) {
  let location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display="flex" justifyContent="space-between">
            <Text>BeeBetter</Text>
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Link to="/">
              <Button colorScheme="yellow" onClick={onClose} my={3} variant={location.pathname === '/' ? 'solid' : 'outline'}>
                Home
              </Button>
            </Link>
            <Link to="/bill">
              <Button colorScheme="yellow" onClick={onClose} my={3} variant={location.pathname === '/bill' ? 'solid' : 'outline'}>
                Bill – chatbot
              </Button>
            </Link>
            <Link to="/about">
              <Button colorScheme="yellow" onClick={onClose} my={3} variant={location.pathname === '/about' ? 'solid' : 'outline'}>
                Sobre
              </Button>
            </Link>
            <UserCoinCounter points={points} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Button
        ref={btnRef}
        onClick={onOpen}
        colorScheme="yellow"
        m={4}
        borderRadius="full"
        size="lg"
        px={6}
        py={8}
        boxShadow="lg"
        position="fixed"
        bottom="0"
        right="0"
        zIndex="999"
      >
        🐝
      </Button>
    </>
  );
}

export default HamburgerMenu;
