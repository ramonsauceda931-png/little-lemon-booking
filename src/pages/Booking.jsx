import { useState } from "react";

function Booking() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("5:00 PM");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (date === "") {
          alert("Please select a date.");
          return;
        }
    
        if (guests < 1 || guests > 10) {
          alert("Please select a number of guests between 1 and 10.");
          return;
        }
    
        alert("Reservation submitted!");
      };
      
    return (
        <main>
            <h1>Little Lemon</h1>
            <h2>Table Booking App</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        min={(new Date().toISOString().split("T")[0])}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button type="submit">Make Your reservation</button>
            </form>
        </main>
    );
}

export default Booking;