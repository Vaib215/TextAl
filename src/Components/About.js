import React from 'react';

export default function About() {
  return (
    <div className={`about-section`}>
      <div className="container col col-md-8 mx-auto">
        <div className="row">
          <div className="about-title clearfix">
            <h1>
              About <span>Appmom</span>
            </h1>
            <h3>Lorem ipsum dolor sit amet </h3>
            <p className="about-paddingB">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet dolor libero, eget venenatis mauris finibus dictum.
              Vestibulum quis elit eget neque porttitor congue non sit amet
              dolor. Proin pretium purus a lorem ornare{' '}
            </p>
            <p>
              sed lobortis pulvinar. Integer laoreet mi id eros porta euismod.
              Suspendisse potenti. Nulla eros mauris, convallis et sem tempus,
              viverra hendrerit sapien
            </p>
            <div className="about-icons">
              <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      src={`https://img.icons8.com/ios-glyphs/28/808080/facebook-new.png`}
                    />
                  </a>{' '}
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <img src="https://img.icons8.com/ios-glyphs/28/808080/instagram-new.png" />
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="https://plus.google.com/">
                    <img src="https://img.icons8.com/ios-glyphs/28/808080/linkedin.png" />
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="mailto:bootsnipp@gmail.com">
                    <img src="https://img.icons8.com/ios-glyphs/28/808080/gmail.png" />
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
