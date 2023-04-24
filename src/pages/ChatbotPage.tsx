import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import data from '../data/answers.json';


const INITIAL_MESSAGES = [
  { text: 'Olá, eu sou o Bill, o zangão da BeeBetter. Como posso te ajudar?', isBot: true },
];

const Chatbot = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const [question, setNewQuestion] = useState('');
  const [botIsTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    setNewMessage(question);
  }, [question]);

  useEffect(() => {
    scrollChatToBottom();
  }, [messages]);

  const clearMessages = () => {
    setMessages(INITIAL_MESSAGES);
    setNewMessage('');
  };

  const scrollChatToBottom = () => {
    const chat = document.getElementById('chat');
    if (chat) {
      chat.scrollTop = chat.scrollHeight;
    }
  };

  const handleNewMessage = () => {
    const newMessageObject = { text: newMessage, isBot: false };
    const newMessages = [...messages, newMessageObject];
    setMessages(newMessages);
    setNewMessage('');
    setIsBotTyping(true);
    setTimeout(() => {
      const answer = getAnswer(newMessage);
      const answerMessageObject = { text: answer, isBot: true };
      const newMessagesWithAnswer = [...newMessages, answerMessageObject];
      setMessages(newMessagesWithAnswer);
      setIsBotTyping(false);
    }, 1000);
    scrollChatToBottom();
  };

  const getAnswer = (question: string) => {
    const answer = data.find((item) => item.question === question)?.answer;
    return answer || 'Desculpe, não entendi sua pergunta';
  };

  const listAnswers = () => {
    const list = data.map((item) => item.question);
    return list;
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} maxW="md" w="full" mx="auto">
      <Box overflowY="scroll" maxHeight="400px" id="chat">
        {messages.map((message, index) => (
          <Box key={index} mb={2} textAlign={message.isBot ? 'left' : 'right'}>
            <Text fontWeight="bold" mb={1}>
              {message.isBot ? 'Bill 🐝' : 'Você'}
            </Text>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={3}
              color={message.isBot ? 'white' : 'black'}
              bg={message.isBot ? 'black' : 'yellow.100'}
            >
              {message.text}
            </Box>
          </Box>
        ))}
      </Box>
      <Box mt={4}>
        {botIsTyping && (
          <Text fontSize="sm" color="yellow.100" textAlign="center" mt={2}>
            Bill está digitando... 🐝
          </Text>
        )}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridGap={2}
        mb={4}
      >
        {listAnswers().map((item, index) => (
          <Button
            key={index}
            colorScheme="yellow"
            onClick={() => {
              setNewQuestion(item);
            }}
          >
            {item}
          </Button>
        ))}
        
      </Box>
      <InputGroup mt={4}>
        <Input
          placeholder="Digite sua mensagem"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleNewMessage();
            }
          }}
        />
        <Button
          colorScheme="yellow"
          onClick={() => {
            handleNewMessage();
          }}
          ml={2}
        >
          Enviar
        </Button>
      </InputGroup>
      <Box h={4} />
      <Button colorScheme="red" onClick={clearMessages}>
        Limpar
      </Button>
    </Box>
  );
};

export default Chatbot;
