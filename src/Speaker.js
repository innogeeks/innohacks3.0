import React from 'react'
import "../src/css/speaker.css"
import "../src/App.css"
import speaker1 from "../src/Assets/speakers/1.jpg"
import speaker2 from "../src/Assets/speakers/2.jpg"
import speaker3 from "../src/Assets/speakers/3.jpg"
import speaker4 from "../src/Assets/speakers/4.jpg"
import speaker5 from "../src/Assets/speakers/5.jpg"
import speaker6 from "../src/Assets/speakers/6.jpg"

function Speaker() {
  return (
    <div>
      

{/* // <!--==========================
//       Speakers Section
//     ============================--> */}
    <section id="speakers" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Event Speakers</h2>
          <p>Here are some of our speakers</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src= {speaker1} alt="Speaker 1" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                <p>Quas alias incidunt</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src= {speaker2} alt="Speaker 2" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
                <p>Consequuntur odio aut</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src= {speaker3} alt="Speaker 3" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
                <p>Fugiat laborum et</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src= {speaker4} alt="Speaker 4" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
                <p>Debitis iure vero</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src= {speaker5} alt="Speaker 5" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
                <p>Qui molestiae natus</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src= {speaker6} alt="Speaker 6" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Willow Trantow</a></h3>
                <p>Non autem dicta</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    </div>
  )
}

export default Speaker