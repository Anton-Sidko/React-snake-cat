import { FC } from 'react';

import { GameContextProvider } from './context/GameContext';

import Header from './components/header/Header.component';
import SettingsBar from './components/settings-bar/SettingsBar.component';
import StatusBar from './components/status-bar/StatusBar.component';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <GameContextProvider>
        <Header />
        <SettingsBar />
        <StatusBar />
      </GameContextProvider>
    </div>
  );
};

export default App;

