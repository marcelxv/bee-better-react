import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Box p={4} zIndex="0" mb="150px">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Voltar a home</Link>
    </Box>
  );
}
