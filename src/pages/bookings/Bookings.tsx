import { Button } from "../../components/Button/Button";
import "./Bookings.scss";

import React from "react";

const BOOKINGS = [
  {
    id: 1,
    guestName: "John Does",
    room: "Deluxe",
    checkIn: "2024-09-10",
    checkOut: "2024-09-15",
  },
  {
    id: 2,
    guestName: "Jane Smith",
    room: "Family",
    checkIn: "2024-09-12",
    checkOut: "2024-09-17",
  },
  {
    id: 3,
    guestName: "Robert Johnson",
    room: "Standard",
    checkIn: "2024-09-08",
    checkOut: "2024-09-11",
  },
  {
    id: 4,
    guestName: "Emily Davis",
    room: "Executive",
    checkIn: "2024-09-13",
    checkOut: "2024-09-19",
  },
  {
    id: 5,
    guestName: "Michael Brown",
    room: "Single",
    checkIn: "2024-09-07",
    checkOut: "2024-09-10",
  },
  {
    id: 6,
    guestName: "Laura Wilson",
    room: "Deluxe",
    checkIn: "2024-09-14",
    checkOut: "2024-09-20",
  },
];

export function Bookings() {
  return (
    <div className="bookingsPageWrapper">
      <header>
        <div>
          <h1>Bookings</h1>
        </div>
        <div className="btnWrapper">
          <Button text={"Filter"} classProp="filterBtn" />
          <Button text={"New Reservation"} />
        </div>
      </header>
      <div className="bookingSearchBar">
        <input type="text" placeholder="Search bookings..." />
      </div>
      <div className="bookings">
        <ul>
          <div className="bookingListHeader">
            <li>Guest</li>
            <li>Room</li>
            <li>Check-in</li>
            <li>Check-out</li>
          </div>
          {BOOKINGS.map((guest) => (
            <div className="bookingList">
              <li key={guest.id}>{guest.guestName}</li>
              <li key={guest.id}>{guest.room}</li>
              <li key={guest.id}>{guest.checkIn}</li>
              <li key={guest.id}>{guest.checkOut}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
