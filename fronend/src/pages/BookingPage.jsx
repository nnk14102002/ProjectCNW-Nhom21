import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingPage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [booking, setBooking] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [rate, setRate] = useState(3);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        
        if (foundBooking) {
          setBooking(foundBooking);
          setPlace(foundBooking.place);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }

  async function deleteBooking(ev) {
    ev.preventDefault();
    if (id) {
      await axios.delete(`/bookings/${id}`, {});
    }
    setRedirect(true);
  }


}
