import React from 'react';
import "./why-choose.css";
import mainPhoto from "../Assets/Egyptian-hawawshi.jpg";

const WhyChoose = () => {
    return (
        <div className='why-choose'>
            <div className="container">

                <div className='image'>
                    <img src={mainPhoto} alt="photoo" />
                </div>

                <div className="info">
                    <h1>Why Choose Us ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptatum aperiam necessitatibus corrupti ea reiciendis
                        voluptates tempora qui eveniet vel cum, soluta eius? Recusandae iusto,
                        iste deleniti earum voluptatibus doloremque sapiente.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default WhyChoose;
