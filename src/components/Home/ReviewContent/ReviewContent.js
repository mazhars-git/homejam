import React from 'react';
import './ReviewContent.css';

const ReviewContent = ({review}) => {
    return (
        <div className="col-md-4 mb-4">
           <div className="review-box p-3">
                <div className="client-profile d-flex">
                    <div className="img">
                        <img src={review.img} alt="" />
                    </div>
                    <div className="title-box">
                        <h5 className="text-white">{review.name}</h5>
                        <p className="text-white"><img src={review.flag} alt="" /> {review.title}</p>
                    </div>
                </div>
                <p className="text-white pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere praesentium inventore dolores ab cum quasi.</p>
           </div>
        </div>
    );
};

export default ReviewContent;