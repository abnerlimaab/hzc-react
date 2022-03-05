import React from 'react';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import Inicio from './paginas/inicio';

function App() {

  return (
    <>
    <GlobalStyle/>
    <Cabecalho />
    <Inicio />
    </>
  );
}

export default App;
