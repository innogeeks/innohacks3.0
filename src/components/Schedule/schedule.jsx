import './schedule.css'


const Schedule = () => {
return(  
<div className="container">
  <div className="row">
    <div className="col">
      <div className="main-timeline">
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">27th April </span>
            <div className="timeline-icon">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">10:00 am - 11:00 am</h3>
              <p className="description">
                Opening Ceremony - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minima beatae sapiente iure, perferendis labore nesciunt a cupiditate eum ipsa quis doloribus laudantium. Sed corporis in repudiandae quos nesciunt veritatis?
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Day 1</span>
            <div className="timeline-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">11:00 am</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Lunch</span>
            <div className="timeline-icon">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">1:30 pm - 2:30 pm</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Mentoring</span>
            <div className="timeline-icon">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">5:00 pm </h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Day 2</span>
            <div className="timeline-icon">
              <i className="fa fa-globe" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Breakfast</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Judging</span>
            <div className="timeline-icon">
              <i className="fa fa-apple" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">10:00 am - 10:30 am</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Results</span>
            <div className="timeline-icon">
              <i className="fa fa-edit" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">12:00 pm</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
)    

};

export default Schedule;