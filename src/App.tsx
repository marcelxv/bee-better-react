import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import ChatbotPage from './pages/ChatbotPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import { ChakraProvider } from '@chakra-ui/react';
import UserCoinCounter from './components/UserCoinCounter';
import ChatbotCTA from './components/ChatbotCTA';
import BackToHome from './components/BackToHome';
import { useState } from 'react';
import BackButton from './components/BackButton';

function App() {
  const [points, setPoints] = useState(0);

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/activity/reciclagem"
            element={<ActivityPage pageType="reciclagem" step="setCEP" />}
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/activity/reciclagem/selecao"
            element={<ActivityPage pageType="reciclagem" step="selecao" />}
          />
          <Route
            path="/activity/reciclagem/formulario"
            element={<ActivityPage pageType="reciclagem" step="formulario" />}
          />
          <Route
            path="/activity/reciclagem/checkout"
            element={<ActivityPage pageType="reciclagem" step="checkout" />}
          />
          <Route
            path="/activity/reciclagem/confirmacao"
            element={
              <ActivityPage
                pageType="reciclagem"
                step="confirmacao"
                points={points}
                setPoints={setPoints}
              />
            }
          />
          <Route path="/bill" element={<ChatbotPage />} />
        </Routes>
        <BackButton />
        <BackToHome />
        <ChatbotCTA />
        <UserCoinCounter points={points} />
      </Router>
    </ChakraProvider>
  );
}

export default App;
