import React from 'react';
import { Header } from './components/Header';
import { Dashboard} from './components/Dashboard';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <GlobalStyle/>
    </>
  );
}

export default App;
