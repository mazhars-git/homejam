import React from 'react';
import Benny from '../../../images/benny.png';
import Vijay from '../../../images/vijay.png';
import Andrea from '../../../images/andrea.png';
import Shilpa from '../../../images/shilpa.png';
import ShowItem from '../ShowItem/ShowItem';

const Shows = () => {
    const showsInfo = [
        {
            category: 'Folk',
            name: 'Benny Dayel',
            img: Benny,
            key: '201'
        },
        {
            category: 'Bollywood',
            name: 'Vijay Yesudas',
            img: Vijay,
            key: '202'
        },
        {
            category: 'Folk',
            name: 'Andrea Jeremiah',
            img: Andrea,
            key: '203'
        },
        {
            category: 'Folk',
            name: 'Shilpa Rao',
            img: Shilpa,
            key: '204'
        }
    ]
    return (
        <section className="container-fluid bg-color">
            <div className="container">
                <div className="heading py-5 d-flex justify-content-between">
                    <h2 className="text-white text-brand">Upcoming Shows</h2>
                    <a style={{color: 'gold'}} href="#">View All</a>
                </div>
                <div className="row pb-5">
                    {
                        showsInfo.map(info => <ShowItem info={info} key={info.key}></ShowItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Shows;