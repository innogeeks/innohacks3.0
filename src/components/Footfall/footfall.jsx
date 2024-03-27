import './footfall.css'
import Man from './gif/man.webp'
import Pen from './gif/pen.webp'
import Pin from './gif/pin.webp'
import Bar from './gif/barchart.webp'
const Footfall =()=>{
    return(
        <div className="main">
            <div className="col1">
                <div className="f1">
                    <img src={Bar} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>600,000+</p>
                    <p style={{fontWeight:'700',fontSize:'2rem', padding:'0px'}}>Impressions</p>
                </div>
                <div className="f1">
                    <img src={Pin} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>30+</p>
                    <p style={{fontWeight:'800',fontSize:'2rem', padding:'0px'}}>Universities</p>
                </div>
            </div>
            <div className="col2">
                <div className="f1">
                    <img src={Pen} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>2.5k+</p>
                    <p style={{fontWeight:'800',fontSize:'2rem', padding:'0px'}}>Registrations</p>
                </div>
                <div className="f1">
                    <img src={Man} alt="" style={{height:'auto', width:'15rem'}}/>
                    <p style={{fontWeight:'900',fontSize:'3rem',padding:'0px'}}>240+</p>
                    <p style={{fontWeight:'800',fontSize:'2rem', padding:'0px'}}>Attendees</p>
                </div>
            </div>
        </div>
    );
};

export default Footfall;
