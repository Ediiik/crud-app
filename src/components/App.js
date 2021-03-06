import React from 'react';

import Header from './Header';
import Collections from './../containers/Collections';

/**
 * The main application component
 */
const App = () => (
  <div>
    <Header />
    <main className="container">
      <Collections />
    </main>
  </div>
);

export default App;
