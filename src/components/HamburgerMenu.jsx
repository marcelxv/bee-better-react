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
  Box,
} from '@chakra-ui/react';
import UserCoinCounter from './UserCoinCounter';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HamburgerMenu({ user, isLogged, setUser, setIsLogged }) {
  let location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleLogout = () => {
    setIsLogged(false);
    setUser({
      name: '',
      email: '',
      points: 0
    });
    
    console.log(user);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
    onClose();
  };

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
          {!isLogged ? (
            <Button onClick={handleLogin} my={3} colorScheme="yellow" variant="outline" size="sm" style={{
              alignSelf: 'center'
            }}>
              Logar
            </Button>
          ) : (
            <Button onClick={(handleLogout)}>
              Deslogar
            </Button>
          )}
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text>Logado como:</Text>
              <Text fontWeight="bold">{user.name}</Text>
            </Box>
            <UserCoinCounter user={user} />
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
