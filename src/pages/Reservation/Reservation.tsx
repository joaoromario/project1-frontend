import { Button } from "../../components/Button/Button";
import { Panel } from "../../components/Panel/Panel";
import "./Reservation.scss";

const BASE_CLASS = "reservation";

export function Reservation() {
  return (
    <div className={`${BASE_CLASS}`}>
      <Panel
        header={
          <>
            <h1>Make a Reservation</h1>
          </>
        }
        children={
          <form action="post">
            <label htmlFor="Room">Room</label>
            <input type="text" placeholder="Select a room" />

            <label htmlFor="Daily Rate">Daily Rate</label>
            <input type="number" placeholder="Enter daily rate" />

            <label htmlFor="NumberOfGuests">Number of Guests</label>
            <input type="number" placeholder="Enter number of guests" />

            <label htmlFor="GuestName">Guest Name</label>
            <input
              type="text"
              name="GuestName"
              placeholder="Enter guest name"
            />

            <label htmlFor="checkin">Check-in Date</label>
            <input type="date" name="checkin" />

            <label htmlFor="checkout">Check-out Date</label>
            <input type="date" name="checkout" />

            <label htmlFor="observation">Observation</label>
            <input type="textfield" name="observation" id="observation" />
            <Button text="Make a reservation" />
          </form>
        }
      />
    </div>
  );
}
