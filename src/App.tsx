import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
