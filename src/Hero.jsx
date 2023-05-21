import React from "react";
import reactImg from './assets/reactImg.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentfull-cms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            inventore atque quis, beatae molestiae vel, unde rerum tenetur nihil
            explicabo reiciendis amet, tempora laborum iusto doloremque totam
            voluptas quasi adipisci corporis cupiditate id quas!
          </p>
        </div>
        <div className="image-container">
            <img src={reactImg} alt="react-image" className="img"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
