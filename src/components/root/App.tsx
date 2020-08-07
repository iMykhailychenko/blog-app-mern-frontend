import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Home from '../pages/home';
import NewPost from '../pages/new_post';


const App = () => (
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
