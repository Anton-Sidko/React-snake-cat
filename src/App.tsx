import { FC, useEffect, useState } from 'react';

import { GameContextProvider } from './context/GameContext';

import Header from './components/header/Header.component';
import SettingsBar from './components/settings-bar/SettingsBar.component';
import StatusBar from './components/status-bar/StatusBar.component';
import Grid from './components/grid/Grid.component';
import { GameController } from './controller/GameController';
import ControlBar from './components/controlBar/ControlBar.component';

const App: FC = (): JSX.Element => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  return (
    <div className="App">
      <GameContextProvider>
        <GameController />
        <Header />
        <SettingsBar />
        <StatusBar />
        <Grid />

        {isTouchDevice && <ControlBar />}
      </GameContextProvider>
    </div>
  );
};

export default App;

