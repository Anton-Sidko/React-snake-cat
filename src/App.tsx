import { FC } from 'react';

import { Header } from './components/header/header.component';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        itaque dolores dicta hic saepe ducimus impedit quas, nobis placeat
        necessitatibus magni. Molestiae esse repudiandae doloribus quos porro,
        labore incidunt qui.
      </p>
      <span>test text</span>
    </div>
  );
};

export default App;

