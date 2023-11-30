import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function AllPlaces() {
  const [places, setPlaces] = useState([]);
  const [setWishlist] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
    axios.get("/wishlist").then((response) => {
      if (response.data[0])
        setWishlist(response.data[0].wishlist.map((obj) => obj.place._id));
    });
  }, []);

  async function addWishlist(ev, place) {
    const res = await axios.post("/wishlist", {
      place: place._id,
    });
    if (res.data) {
      setWishlist((prevWishlist) => [...prevWishlist, place._id]);
    } else alert("You must login to favorite places!!");
  }

  async function removeWishlist(ev, place) {
    ev.preventDefault();
    await axios.put("/wishlist", {
      place: place._id,
    });
    setWishlist((prevWishlist) =>
      prevWishlist.filter((id) => id !== place._id)
    );
  }

  return (
    <div>
      <h1 className="lg:mx-24 mx-16 font-semibold text-2xl">All hotels</h1>
      <div className="lg:mx-20 mx-10 my-10 mt-6 grid gap-x-6 gap-y-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {places.length > 0 &&
          places.map((place) => (
            <div key={place._id}>
              <div className="border-2 p-4 rounded-xl shadow-lg">
                <Link to={"/place/" + place._id}>
                  <div className="bg-gray-500 mb-2 rounded-2xl flex">
                  </div>
                  <div className="h-24">
                    <h2 className="font-bold">{place.title}</h2>
                    <h3 className="text-sm text-gray-500">{place.address}</h3>
                  </div>
                </Link>
                <div className="mt-1 flex justify-between items-end">
                  <div>
                    <span className="font-bold">${place.price}</span>
                    /night
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
