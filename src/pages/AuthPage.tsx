import React, { useState } from 'react';
import { authUser } from '../services/auth';
import { Box, Button, Heading, Text, Input, Spinner, Toast, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function AuthPage({ setUser, setIsLogged }: { setUser: any, setIsLogged: any }) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const toast = useToast();


    const handleLogin = async () => {
        const userEmail = (document.getElementById('email') as HTMLInputElement).value;
        const userPassword = (document.getElementById('password') as HTMLInputElement).value;
        setIsLoading(true);
        if (userEmail && userPassword) {
            const user = await authUser(userEmail, userPassword);

            if (user.error === null) {
                setIsLoading(false);
                setError(true);
                toast({
                    title: "Erro ao fazer login",
                    description: "Email ou senha incorretos",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
                return;
            }
            setUser(user);
        }

        setIsLoading(false);
        setIsLogged(true);
        navigate('/home');
    }

    return (
        <Box background="url('https://source.unsplash.com/1600x900?nature')" backgroundSize="cover" backgroundPosition="center" height="100vh" width="100vw" display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="white">
            {isLoading ? (
                <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
            ) : (
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p="4" background="white" borderRadius="md" boxShadow="md" width="400px" color="black">
                    <Heading as="h4" size="sm" mt="4">
                        para começar ou continuar a salvar o planeta
                    </Heading>
                    <Heading as="h1" size="lg" mt="4">
                        acessar o beebetter
                    </Heading><Box mt="4" mb="4">
                        <label htmlFor="email">e-mail</label>
                        <Input type="email" id="email" />
                    </Box><Box mt="4" mb="4">
                        <label htmlFor="password">senha</label>
                        <Input type="password" id="password" />
                    </Box><Button colorScheme="orange" onClick={handleLogin}>entrar</Button>
                </Box>
            )}
        </Box>
    );
}

export default AuthPage;