import React from 'react';
import CountUpEvent from '../CountUpEvent/CountUpEvent';
import { faCalendarPlus, faCheckCircle, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const CountUpSection = () => {
    const countUpInfos=[
        {
            img: faHeart,
            number: 456,
            title: 'Like Everyday',
            key: '301'
        },
        {
            img: faCalendarPlus,
            number: 745,
            title: 'Online Events',
            key: '302'
        },
        {
            img: faThumbsUp,
            number: 1000,
            title: 'Happy Clients',
            key: '303'
        },
        {
            img: faCheckCircle,
            number: 499,
            title: 'Available Tickets',
            key: '304'
        }
    ]
    return (
        <section className="container countUp-section">
            <div className="row countUp-content">
                {
                    countUpInfos.map(info => <CountUpEvent detail={info} key={info.key}></CountUpEvent>)
                }
            </div>
        </section>
    );
};

export default CountUpSection;