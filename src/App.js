import React from 'react';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import MenuLateral from './components/MenuLateral';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Cabecalho/>
    <MenuLateral/>
    </>
  );
}

export default App;
