import React from 'react';
import "./about.css";
import mainPhoto from "../Assets/chef-photo.jpg";

const About = () => {
    return (
        <div className='about'>
            <div className="title">Meet Our Chef</div>
            <div className="container">

                <div className='image'>
                    <img src={mainPhoto} alt="photoo" />
                </div>

                <div className="info">

                    <h1>Chef Ahmed</h1>

                    <div className='experience'>
                        <p className="experience-chef">Experience : </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Voluptatum aperiam necessitatibus corrupti ea reiciendis
                            voluptates tempora qui eveniet vel cum, soluta eius? Recusandae iusto,
                            iste deleniti earum voluptatibus doloremque sapiente.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
