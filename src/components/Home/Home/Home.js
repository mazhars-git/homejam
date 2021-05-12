import React from 'react';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Shows from '../Shows/Shows';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Shows></Shows>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;