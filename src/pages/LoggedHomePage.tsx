import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Highlight,
} from '@chakra-ui/react';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ isLogged, user }: { isLogged: boolean; user: any }) {
  const [activities, setActivity] = useState([
    {
      id: 1,
      emoji: '♻️',
      name: 'separação de lixo para reciclagem',
      description: 'separação de lixo para reciclagem',
      link: '/activity/reciclagem',
      active: true,
    },
    {
      id: 2,
      emoji: '🌱',
      name: 'cultivo em horta doméstica',
      description: 'cultivo de hortaliças em horta doméstica',
      link: '/',
      active: false,
    },
    {
      id: 3,
      emoji: '🍎',
      name: 'hábitos alimentares saudáveis',
      description: 'hábitos alimentares saudáveis',
      link: '/',
      active: false,
    },
    {
      id: 4,
      emoji: '🏃',
      name: 'práticas de atividades físicas',
      description: 'práticas de atividades físicas',
      link: '/',
      active: false,
    },
    {
      id: 5,
      emoji: '👨‍👩‍👧‍👦',
      name: 'participação em projetos de voluntariado',
      description: 'participação em projetos de voluntariado',
      link: '/',
      active: false,
    },
  ]);

  const navigate = useNavigate();

useEffect(() => {
  if (!isLogged) {
    navigate('/');
  }
}, [isLogged, navigate]);

  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />
      <Box mt="10px">
        <Heading>olá, {user.name}!</Heading>
        <Text mt="10px" fontSize="lg">
          <Highlight
            query="beecoins"
            styles={{ px: '1', py: '1', bg: 'orange.100' }}
          >
            escolha uma atividade para começar a ganhar beecoins
          </Highlight>
        </Text>
        <SimpleGrid columns={1} spacing={10} mt="40px">
          {activities.map((activity) => (
            <Link
              to={activity.link}
              key={activity.id}
              style={
                activity.active
                  ? { pointerEvents: 'auto' }
                  : { pointerEvents: 'none' }
              }
            >
              <Card
                variant={activity.active ? 'solid' : 'outline'}
                bg={activity.active ? 'gray.50' : 'white'}
                color={activity.active ? 'gray.800' : 'gray.400'}
                _hover={
                  activity.active ? { bg: 'gray.100' } : { bg: 'gray.50' }
                }
                cursor="pointer"
                p="20px"
                h="100%"
              >
                <Box fontSize="3rem" textAlign="center">
                  {activity.emoji}
                </Box>
                <Box textAlign="center">
                  <Heading as="h2" size="md">
                    {activity.name}
                  </Heading>
                  <Text>{activity.description}</Text>
                </Box>
                <CardFooter>
                  {!activity.active ? (
                    <Text textAlign="center">em breve</Text>
                  ) : null}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}