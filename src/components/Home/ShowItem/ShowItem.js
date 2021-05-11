import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Ticket from '../../../images/ticket.png';
import './ShowItem.css';

const ShowItem = ({info}) => {
    return (
        <div className="col-md-3 mb-3">
            <div className="show-box">
                <img className="show-img" src={info.img} alt="" />
                <div className="show-content p-3">
                    <small className="show-category">{info.category}</small>
                    <h3 className="text-white pb-3 mt-2">{info.name}</h3>
                    <div className="card-bottom d-flex justify-content-between">
                        <a href="#">More Info <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                        <div className="ticket">
                            <a href=""><img src={Ticket} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowItem;