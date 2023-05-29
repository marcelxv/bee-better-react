import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from '@chakra-ui/react';
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
  const [featuredMessage, setFeaturedMessage] = useState('');
  const [notificationSound] = useSound(chatFX);

  // setFeaturedMessage for the first 10 questions
  const getFeaturedMessage = () => {
    const featuredMessage = data.slice(0, 10).map((item) => item.question);
    const otherThanFeatured = data.slice(10).map((item) => item.question);
    setQuestions(otherThanFeatured);
    setFeaturedMessage(featuredMessage);
  };

  useEffect(() => {
    getFeaturedMessage();
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
        <ChatForm
          newMessage={newMessage}
          questions={questions}
          setNewMessage={setNewMessage}
          sendMessage={handleNewMessage}
        />
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
          <Box>
            <h2 style={{ textAlign: 'left' }}>Principais perguntas</h2>
            {featuredMessage && (
              <ListQuestions
                questions={featuredMessage}
                setNewQuestion={setNewQuestion}
              />
            )}
          </Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Perguntas frequentes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ListQuestions
                  questions={questions}
                  setNewQuestion={setNewQuestion}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default Chatbot;
