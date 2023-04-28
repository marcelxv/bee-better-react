import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import ChatbotPage from './pages/ChatbotPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  const [points, setPoints] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Router>
          <>
          <HamburgerMenu
            points={points}
          />
          </>
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
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
