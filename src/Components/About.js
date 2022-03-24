import React from 'react';

export default function About() {
  document.title="TextAl | About"
  return (
    <div className={`about-section`}>
      <div className="container col col-md-8 mx-auto">
        <div className="row">
          <div className="about-title clearfix">
            <h1>
              About <span>Textal</span>
            </h1>
            <h3>A React Based Text Manipulation App</h3>
            <p className="about-paddingB">
              This is a single-page web application made with react. This is my first react app. Hope you like it.
            </p>
            <p>
              About Developer
  <br/>
  This is Vaibhav Kumar Singh. I am a learner and a coding lover. Productivity is my priority. I love to collaborate, so if you are interested, feel free to connect with me on the following handles.
            </p>
            <div className="about-icons">
              <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li>
                  <a href="https://facebook.com/vaibhav.sisodiya.16">
                    <img
                      src={`https://img.icons8.com/ios-glyphs/28/808080/facebook-new.png`}
                    />
                  </a>{' '}
                </li>
                <li>
                  <a href="https://github.com/Vaib215">
                    <img src="https://img.icons8.com/ios-glyphs/28/808080/github.png" />
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="https://www.linkedin.com/in/Vaib215">
                    <img src="https://img.icons8.com/ios-glyphs/28/808080/linkedin.png" />
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="https://vaib.carrd.co">
                    <img src="https://img.icons8.com/ios-glyphs/28/808080/globe.png" />
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="about-img">
              <img
                src="https://devitems.com/preview/appmom/img/mobile/2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
