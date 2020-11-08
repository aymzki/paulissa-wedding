import React from 'react';
import image5 from '../images/image5.jpeg';
import './Celebrate.css';


function Celebrate() {
    return (
        
        <div className='celebrate-container'>
            <img src={image5} alt="Selected" className="centerimg" />
            <div className="textdiv">
            <p className="blurb">Thank you for all your well wishes on this occasion! 
            <br></br>
            But wait-- there's more! We will have a post-pandemic ceremony and celebration once it is safe for all friends and family to travel. We will update you when the time comes, and looking forward to seeing you then.
            <br></br>
            <br></br>
            Alissa and Paul</p>
            </div>
        </div>
        
    )
}

export default Celebrate 