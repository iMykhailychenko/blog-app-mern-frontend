import React from 'react';

// import components
import Header from '../header/Header';

// pages
import Home from '../../pages/home/Home';

interface Props {}

const App: React.FC<Props> = () => (
  <>
    <Header />
    <Home />
    <footer>
      footer element
    </footer>
  </>
);

export default App;
