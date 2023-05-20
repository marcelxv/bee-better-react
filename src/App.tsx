import HomePage from './pages/LoggedHomePage';
import AuthPage from './pages/AuthPage';
import ActivityPage from './pages/ActivityPage';
import ChatbotPage from './pages/ChatbotPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import supabase from './services/supabase';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    points: 0,
  });

  return (
    <>
      <ChakraProvider>
        <Router>
          <>
            <HamburgerMenu
              user={user}
              isLogged={isLogged}
              setUser={setUser}
              setIsLogged={setIsLogged}
            />
          </>
          <Routes>
            <Route path="/" element={<AuthPage setUser={setUser} setIsLogged={setIsLogged} />} />
            <Route path="/home" element={<HomePage isLogged={isLogged} user={user} />} />
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
                  points={user.points}
                  setUser={setUser}
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
