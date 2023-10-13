import React from 'react';
import './styles.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="mars"></div>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        alt="404"
        className="logo-404"
      />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        alt="meteor"
        className="meteor"
      />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div align="center">
        <a className="btn-back" href="/">
          Back to previous page
        </a>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        alt="astronaut"
        className="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        alt="spaceship"
        className="spaceship"
      />
    </div>
  );
};

export default NotFoundPage;
