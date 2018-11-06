import React from 'react';
import './Home.css';

const Home = props => (
  <div className="Home">
    <h2 className="home-header">Welcome to Disc Golf Guru!</h2>
    <p className="home-intro">
      This site lets you search for nearby disc golf courses and shows your
      current weather and forecasts for each course.
    </p>
    <p className="home-search-instructions">
      Click the 'Find A Course' button above to search for a disc golf course!
    </p>
  </div>
);

export default Home;
