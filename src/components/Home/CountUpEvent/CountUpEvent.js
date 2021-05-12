import React from 'react';
import CountUp, { startAnimation } from 'react-countup';
import './CounterUpEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CountUpEvent = (props) => {
    const {img, title, number} = props.detail;
    return (
        <div className="col-md-3 col-sm-6 mb-3 d-flex justify-content-center">
            <div className="counterBox pt-4">
                <FontAwesomeIcon className="countUpIcon" icon={img}/> <br /> <br />
                <h2><CountUp 
                    start={0} 
                    end={number}
                    duration={10} 
                    ref={(countUp) => {}} /></h2>
                <p className="pt-2">{title}</p>
            </div>
        </div>
    );
};

export default CountUpEvent;