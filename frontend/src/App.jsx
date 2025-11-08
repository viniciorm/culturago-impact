import React from 'react';
import Home from './components/Home';
import Eventos from './components/Eventos';
import Panel from './components/Panel';
import WalletConnect from './components/WalletConnect';

const App = () => {
  return (
    <main>
      <Home />
      <WalletConnect />
      <Eventos />
      <Panel />
    </main>
  );
};

export default App;
