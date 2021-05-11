import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import MainMenu from '../MainMenu/MainMenu';
import './Header.css';

const Header = () => {
    return (
        <section className="container-fluid header-area">
            <MainMenu></MainMenu>
            <HeaderContent></HeaderContent>
        </section>
    );
};

export default Header;