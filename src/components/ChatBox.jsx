import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ChatBox = ({ messages, sendMessage, botIsTyping }) => {
    return (
        <>
            <Box overflowY="scroll" maxHeight="400px" id="chat">
                {messages.map((message, index) => (
                    <Box
                        key={index}
                        mb={2}
                        textAlign={message.isBot ? 'left' : 'right'}
                    >
                        <Text fontWeight="bold" mb={1}>
                            {message.isBot ? 'Bill 🐝' : 'Você'}
                        </Text>
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            p={3}
                            color={message.isBot ? 'black' : 'black'}
                            bg={message.isBot ? 'yellow.300' : 'gray.100'}
                        >
                            {message.text}
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box mt={4}>
                {botIsTyping && (
                    <Text fontSize="sm" textAlign="center" mt={2} color="gray.500">
                        Bill está digitando... 🐝
                    </Text>
                )}
            </Box>
        </>
    );
};

export default ChatBox;