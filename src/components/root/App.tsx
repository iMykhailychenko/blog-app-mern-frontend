import React from 'react';
import { Route, Switch } from 'react-router-dom';
import router from '../../config/router';
import Header from '../header';
import Footer from '../footer';
import Home from '../pages/home';
import SinglePost from '../pages/single_post';
import NewPost from '../pages/new_post';


const App = () => (
    <>
        <Header />

        <Switch>
            <Route path={router.home} exact component={Home} />
            <Route path={router.post.new} component={NewPost} />
            <Route path={router.post.singleStat} component={SinglePost} />
        </Switch>

        <Footer />
    </>
);

export default App;
