import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../images/logo.png';

const MainMenu = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                            
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item me-2">
                                    <a className="nav-link text-white" aria-current="page" href="#"><FontAwesomeIcon icon={faSearch} /> Search</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link text-white" aria-current="page" href="#">Help</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link text-white" href="#">Account</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faShoppingBag} /></a>
                                </li>
                            </ul>
                       
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default MainMenu;