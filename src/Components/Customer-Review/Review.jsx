import React from 'react';
import "./review.css";
import castomer_1 from "../Assets/costumar-1.png";
import castomer_2 from "../Assets/costumar-2.jpg";
import castomer_3 from "../Assets/costumar-3.jpg";
import star from "../Assets/star-image.png";


const Review = () => {
    return (
        <div className='review'>
            <h1>customer reviews</h1>

            <div className='container'>
                <div className="box">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Earum, laboriosam sapiente cupiditate corporis reprehenderit
                        animi placeat obcaecati a.
                        Necessitatibus repellendus doloribus quisquam soluta
                        nam molestiae esse totam dolorum ipsa minima?</p>

                    <div className="stars">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>

                    <img className='costumar' src={castomer_1} alt="" />
                    <h3>Ahmed Mohamed</h3>
                </div>
                <div className="box">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Earum, laboriosam sapiente cupiditate corporis reprehenderit
                        animi placeat obcaecati a.
                        Necessitatibus repellendus doloribus quisquam soluta
                        nam molestiae esse totam dolorum ipsa minima?</p>

                    <div className="stars">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>

                    <img className='costumar' src={castomer_2} alt="" />
                    <h3>Mohamed Sayed</h3>
                </div>
                <div className="box">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Earum, laboriosam sapiente cupiditate corporis reprehenderit
                        animi placeat obcaecati a.
                        Necessitatibus repellendus doloribus quisquam soluta
                        nam molestiae esse totam dolorum ipsa minima?</p>

                    <div className="stars">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>

                    <img className='costumar' src={castomer_3} alt="" />
                    <h3>Salah Ahmed</h3>
                </div>
            </div>

        </div>
    );
}

export default Review;
