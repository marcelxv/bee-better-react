import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
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
          element={<ActivityPage pageType="reciclagem" step="confirmacao" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
