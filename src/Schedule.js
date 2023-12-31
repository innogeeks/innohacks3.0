import React from 'react'
import "../src/css/schedule.css"
import speakers1 from "../src/Assets/speakers/1.jpg"
import speakers2 from "../src/Assets/speakers/2.jpg"
import speakers3 from "../src/Assets/speakers/3.jpg"
import speakers4 from "../src/Assets/speakers/4.jpg"
import speakers5 from "../src/Assets/speakers/5.jpg"
import speakers6 from "../src/Assets/speakers/6.jpg"

function Schedule() {
  return (
    <div>
      {/* <!--==========================
      Schedule Section
    ============================--> */}
    <section id="schedule" className="section-with-bg">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h2>Event Schedule</h2>
          <p>Here is our event schedule</p>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Day 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
          </li>
        </ul>

        <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

        <div className="tab-content row justify-content-center">

          {/* <!-- Schdule Day 1 --> */}
          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

            <div className="row schedule-item">
              <div className="col-md-2"><time>09:30 AM</time></div>
              <div className="col-md-10">
                <h4>Registration</h4>
                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers1} alt="Brenden Legros"/>
                </div>
                <h4>Keynote <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers2} alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers3} alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers4} alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers5} alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers6} alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          {/* <!-- End Schdule Day 1 --> */}

          {/* <!-- Schdule Day 2 --> */}
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers1} alt="Brenden Legros"/>
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers2} alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers3} alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers4} alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers5} alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers6} alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          {/* <!-- End Schdule Day 2 --> */}

          {/* <!-- Schdule Day 3 --> */}
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers2} alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers3} alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers1} alt="Brenden Legros"/>
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers4} alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers5} alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src= {speakers6} alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          {/* <!-- End Schdule Day 2 --> */}

        </div>

      </div>

    </section>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>


    </div>
  )
}

export default Schedule
