import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
