import React from 'react';

// import components
import Header from '../header/Header';
import Footer from '../footer/Footer';

// pages
import Home from '../../pages/home/Home';

interface Props {}

const App: React.FC<Props> = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

export default App;
