import { Box, Flex, Heading, Text, Modal, ModalOverlay, ModalContent, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';


export default function ChatModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent
                    bg="white"
                    borderRadius="20px"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    p="20px"
                    w="100%"
                    h="100%"
                    maxW="400px"
                    maxH="600px"
                >
                    <Flex justifyContent="flex-end">
                        <Button onClick={() => setIsOpen(false)}>X</Button>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-around" flexDirection="column">
                        <Heading as="h2" size="md" mb="20px">Chat</Heading>
                        <Box
                            bg="gray.100"
                            borderRadius="20px"
                            p="20px"
                            w="100%"
                            h="300px"
                            maxH="400px"
                            overflowY="auto"
                        >
                            <Text>Olá, tudo bem?</Text>

                        </Box>
                        <Box
                            flexDirection="column"
                            maxH="50px"
                            mt="20px"
                        >
                            <Input
                                placeholder="Digite sua mensagem"
                                mt="20px"
                                w="70%"
                                maxW="300px"
                            />
                            <Button
                                w="100%"
                                h="100%"
                                maxW="20%"
                                ml="20px"
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Flex>
                </ModalContent>
            </Modal>
        </>

    )
}