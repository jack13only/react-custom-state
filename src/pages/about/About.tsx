import React from 'react';
import './About.scss';

const About = (): JSX.Element => {
  return (
    <div className="about-wrapper">
      <img src="../images/gif/dancing-cat.gif" alt="dancing-cat" className="about-wrapper__gif" />
      <div>About us</div>
    </div>
  );
};

export default About;
