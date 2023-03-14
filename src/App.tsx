import { FC } from 'react';

import Header from './components/header/header.component';
import SettingsBar from './components/settings-bar/settings-bar.component';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <SettingsBar />
    </div>
  );
};

export default App;

