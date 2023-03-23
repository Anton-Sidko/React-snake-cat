import { FC } from 'react';

import { GameContextProvider } from './context/GameContext';

import Header from './components/header/header.component';
import SettingsBar from './components/settings-bar/SettingsBar.component';
import StatusBar from './components/status-bar/StatusBar.component';
import Grid from './components/grid/Grid.component';
import { GameController } from './controller/GameController';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <GameContextProvider>
        <GameController />
        <Header />
        <SettingsBar />
        <StatusBar />
        <Grid />
      </GameContextProvider>
    </div>
  );
};

export default App;

