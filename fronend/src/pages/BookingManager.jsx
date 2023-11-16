import { useEffect, useState } from "react";
import axios from "axios";
export default function BookingManager() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(`/booking-manager`).then((response) => {
      setBookings(response.data);
    });
  }, []);

  console.log(bookings);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based.
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  
}
