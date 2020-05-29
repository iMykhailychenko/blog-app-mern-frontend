import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import components
import Header from '../header/Header';
import Footer from '../footer/Footer';

// pages
import Home from '../../pages/home/Home';
import NewPost from '../../pages/new-post/NewPost';


const App: React.FC<{}> = () => (
    <>
        <Header />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new-post" component={NewPost} />
        </Switch>

        <Footer />
    </>
);

export default App;
