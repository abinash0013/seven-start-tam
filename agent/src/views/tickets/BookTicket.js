import React, { useState } from 'react'
import "./BookTicket.css"

const BookTicket = () => {
  const [bookTicketNumber, setBookTicketNumber] = useState("");
  const numbers = [];

  for (let i = 1; i <= 600; i++) {
    numbers.push(i);
  } return (
    <>
      <div className="bookTicketNumberContainer" >
        <ul className="bookTicketNumberBox">
          {numbers.map(number => (
            <li className="bookTicketNumber" key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <div>name</div>
        <div>phone</div>
      </div>
    </>
  )
}

export default BookTicket