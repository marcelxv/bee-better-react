import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  SimpleGrid,
  Heading,
  Text,
  Highlight,
} from '@chakra-ui/react';
import Logo from '../images/logo-beebetter.svg';

export default function HomePage() {
  const [user, setUser] = useState({ name: 'john doe' });
  const [activities, setActivity] = useState([
    {
      id: 1,
      name: 'cultivo em horta doméstica',
      description: 'cultivo de hortaliças em horta doméstica',
      link: '/',
      active: false,
    },
    {
      id: 2,
      name: 'separação de lixo para reciclagem',
      description: 'separação de lixo para reciclagem',
      link: '/activity/reciclagem',
      active: true,
    },
    {
      id: 3,
      name: 'hábitos alimentares saúdaveis',
      description: 'hábitos alimentares saúdaveis',
      link: '/',
      active: false,
    },
    {
      id: 4,
      name: 'práticas de atividades físicas',
      description: 'práticas de atividades físicas',
      link: '/',
      active: false,
    },
    {
      id: 5,
      name: 'participação em projetos de voluntáriado',
      description: 'participação em projetos de voluntáriado',
      link: '/',
      active: false,
    },
  ]);

  return (
    <Box w="360px" h="100%" m="0 auto">
      <Box>
        <img src={Logo} alt="logo beebetter" />
        <Box mt="10px">
          <Heading>olá, {user.name}!</Heading>
          <Text mt="10px">
            <Highlight
              query="beecoins"
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange' }}
            >
              escolha uma atividade para começar a ganhar beecoins
            </Highlight>
          </Text>
        </Box>
        <SimpleGrid columns={2} spacing={10} mt="40px">
          {activities.map((activity) => (
            <Link to={activity.link} key={activity.id}>
              <Card
                variant={activity.active ? 'elevated' : 'filled'}
                p="2rem"
                _hover={activity.active ? { cursor: 'pointer' } : {}}
              >
                <h3>{activity.name}</h3>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
