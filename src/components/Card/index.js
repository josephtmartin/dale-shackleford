import React from 'react';
import '../../styles/components/_card.scss';

export default function Card({ title, heading, image }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2>{title}</h2>
          <p>{heading}</p>
        </div>
        <div className="card-back">
          <a
            href="mailto:dshacksounds@gmail.com?subject=Booking Inquiry&body=Hi, I would like to book your services."
            className="book-now-button"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}