import React from 'react'
import "../src/css/sponsor.css"
import "../src/App.css"
import sponsor1 from "../src/Assets/sponsors/1.png"
import sponsor2 from "../src/Assets/sponsors/2.png"
import sponsor3 from "../src/Assets/sponsors/3.png"
import sponsor4 from "../src/Assets/sponsors/4.png"
import sponsor5 from "../src/Assets/sponsors/5.png"
import sponsor6 from "../src/Assets/sponsors/6.png"
import sponsor7 from "../src/Assets/sponsors/7.png"
import sponsor8 from "../src/Assets/sponsors/8.png"

function Sponsor() {
  return (
    <div>
      {/* <!--==========================
      Sponsors Section
    ============================--> */}
    <section id="sponsors" className="section-with-bg wow fadeInUp">

      <div className="container">
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>

        <div className="row no-gutters sponsors-wrap clearfix">

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor2} className="img-fluid" alt=""/>
            </div>
          </div>
        
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>
        
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src= {sponsor1} className="img-fluid" alt=""/>
            </div>
          </div>

        </div>

      </div>

    </section>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    </div>
  )
}

export default Sponsor
