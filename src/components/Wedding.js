import React, { useState } from 'react';
import Images from "../Images";
import './Wedding.css';

export default function Wedding() {
    const [selectedImg, setSelectedImg] = useState(Images[0]);
  
    return (
      <div className="photos">
        <div className="container">
          <img src={selectedImg} alt="Selected" className="selected" />
          <div className="imgContainer">
            {Images.map((wed, index) => (
              <img
                style={{ border: selectedImg === wed ? "4px solid gainsboro" : "" }}
                key={index}
                src={wed}
                alt="photo"
                onClick={() => setSelectedImg(wed)}
              />
            ))}
          </div>
        </div>
      </div>
    );
}