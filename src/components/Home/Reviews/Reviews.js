import React from 'react';
import Hellen from '../../../images/Img.png';
import Isaac from '../../../images/Img (1).png';
import Jams from '../../../images/Img (2).png';
import flagUs from '../../../images/🇺🇸.png';
import flagIt from '../../../images/it.png';
import ReviewContent from '../ReviewContent/ReviewContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    const reviewsInfo=[
        {
            img: Hellen,
            name: 'Hellen Jummy',
            title: 'PALO ALTO, CA',
            flag: flagUs,
        },
        {
            img: Isaac,
            name: 'Isaac Oluwatemilorun',
            title: 'PALO ALTO, CA',
            flag: flagIt,
        },
        {
            img: Jams,
            name: 'Jams Lie',
            title: 'PALO ALTO, CA',
            flag: flagUs,
        },
    ]
    return (
        <section className="container-fluid bg-color">
            <div className="container">
                <div className="heading py-5 d-flex justify-content-between">
                    <h2 className="text-white">Reviews</h2>
                    <a href="#" className="text-white">1/12 <FontAwesomeIcon icon={faLongArrowAltLeft}/> <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                </div>
                <div className="row pb-5">
                    {
                        reviewsInfo.map(info => <ReviewContent review={info}></ReviewContent>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;