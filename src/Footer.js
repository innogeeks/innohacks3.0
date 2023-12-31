import React from 'react';
import "../src/css/footer.css"
import "../src/App.css"

function Footer() {
  return (
    <div>
      {/* <!--==========================
        Footer
      ============================--> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <img src="img/logo.png" alt="TheEvenet" />
                <p>
                  In alias aperiam. Placeat tempore facere. Officiis voluptate
                  ipsam vel eveniet est dolor et totam porro. Perspiciatis ad
                  omnis fugit molestiae recusandae possimus. Aut consectetur id
                  quis. In inventore consequatur ad voluptate cupiditate debitis
                  accusamus repellat cumque.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>{' '}
                    <a href="#">Home</a>
                  </li>
                  {/* ... Other list items ... */}
                </ul>
              </div>
              {/* ... Other columns ... */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    </div>
  );
}

export default Footer;
