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
            {Images.map((img, index) => (
              <img
                style={{ border: selectedImg === img ? "4px solid gainsboro" : "" }}
                key={index}
                src={img}
                alt="photo"
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
        </div>
      </div>
    );
}