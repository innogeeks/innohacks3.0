import './footfall.css'
import ff from '../../containers/Home/assets/barchart.gif'
import lp from '../../containers/Home/assets/locationPin.gif'
import rg from '../../containers/Home/assets/pen.gif'
import man from '../../containers/Home/assets/man.gif'

const Footfall =()=>{
    return(
        <div className="main">
            <div className="col1">
                <div className="f1">
                    <img src={ff} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>500,000+</p>
                    <p style={{fontWeight:'700',fontSize:'2rem', padding:'0px'}}>Impressions</p>
                </div>
                <div className="f1">
                    <img src={lp} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>20+</p>
                    <p style={{fontWeight:'800',fontSize:'2rem', padding:'0px'}}>Universities</p>
                </div>
            </div>
            <div className="col2">
                <div className="f1">
                    <img src={rg} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>1000+</p>
                    <p style={{fontWeight:'800',fontSize:'2rem', padding:'0px'}}>Registrations</p>
                </div>
                <div className="f1">
                    <img src={man} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>700+</p>
                    <p style={{fontWeight:'800',fontSize:'2rem', padding:'0px'}}>Attendees</p>
                </div>
            </div>
        </div>
    );
};

export default Footfall;
