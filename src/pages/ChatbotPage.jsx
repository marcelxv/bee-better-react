import { useState, useEffect } from 'react';
import { Box, Button, Input, InputGroup, Text } from '@chakra-ui/react';
import data from '../data/answers.json';
import Navbar from '../components/NavBar';
import ListQuestions from '../components/ListQuestions';
import useSound from 'use-sound';
import chatFX from '../sounds/chat.mp3';
import ChatBox from '../components/ChatBox';
import ChatForm from '../components/ChatForm';

const INITIAL_MESSAGES = [
  {
    text: 'Olá, eu sou o Bill, o zangão da BeeBetter. Como posso te ajudar?',
    isBot: true,
  },
];

const Chatbot = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [questions, setQuestions] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [botIsTyping, setIsBotTyping] = useState(false);
  const [notificationSound] = useSound(chatFX);

  useEffect(() => {
    setQuestions(getQuestions());
    setNewMessage(newQuestion);
  }, [newQuestion]);

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
      notificationSound();
    }, 1000);
    scrollChatToBottom();
  };

  const getAnswer = (question) => {
    const answer = data.find((item) => item.question === question)?.answer;
    return answer || 'Desculpe, não entendi sua pergunta';
  };

  const getQuestions = () => {
    const questions = data.map((item) => item.question);
    return questions;
  };

  return (
    <>
      <Navbar />
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        maxW="md"
        w="full"
        mx="auto"
      >
        <ChatBox messages={messages} botIsTyping={botIsTyping} />
        <ChatForm newMessage={newMessage} questions={questions} setNewMessage={setNewMessage} sendMessage={handleNewMessage} />
        <Box h={4} />
        <Button colorScheme="red" onClick={clearMessages}>
          Limpar
        </Button>
        <Box
          display="grid"
          gridTemplateColumns="repeat(1, 1fr)"
          gridGap={2}
          my={4}
        >
          <ListQuestions questions={questions} setNewQuestion={setNewQuestion} />
        </Box>
      </Box>
    </>
  );
};

export default Chatbot;
