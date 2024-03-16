import './schedule.css'


const Schedule = () => {
return(  
<div className="container">
  <div className="row">
    <div className="col">
      <div className="main-timeline">
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">10:00 am</span>
            <div className="timeline-icon">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Opening Ceremony</h3>
              <p className="description">
               On 28th April, Day 1 of the event starts with an Opening Ceremony through our esteemed faculties and Judges
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">11:00 am</span>
            <div className="timeline-icon">
              <i className="fa fa-flag" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Start Hacking !</h3>
              <p className="description">
                The Fun begins ! Start your systems and Get ready for an adventure filled with collaboration and code.
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">1:30 pm</span>
            <div className="timeline-icon">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Lunch</h3>
              <p className="description">
                It's time for break. Relax and enjoy the meal while networking with like-minded individuals  
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">5:00 pm</span>
            <div className="timeline-icon">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Mentoring</h3>
              <p className="description">
                Here comes the First round of Judging ! Don't worry as it is an unmoderated round. So, ask away all your doubts !
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
                29th April begins with a hearty breakfast as we step into the last leg of the Hackathon !
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Judging</span>
            <div className="timeline-icon">
              <i className="fa fa-edit" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">11:00 am - 1:30 pm</h3>
              <p className="description">
                The round to present your solutions to the judges is here ! All the best 
              </p>
            </div>
          </a>
        </div>
        <div className="timeline">
          <a href="#" className="timeline-content">
            <span className="timeline-year">Results</span>
            <div className="timeline-icon">
              <i className="fa fa-trophy" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">3:30 pm - 4:30 pm</h3>
              <p className="description">
                We end 24-Hour of adventure with speakers sessions and Announcing the winners !
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