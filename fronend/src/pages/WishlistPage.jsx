import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function WishlistPage() {
  const [places, setPlaces] = useState([]);
  const [setReady] = useState(false);

  useEffect(() => {
    axios.get("/wishlist").then((response) => {
      if (response.data.length !== 0) {
        setPlaces(response.data[0].wishlist);
      }
      setReady(true);
    });
  }, []);

  async function removeWishlist(ev, place) {
    ev.preventDefault();
    await axios.put("/wishlist", {
      place: place._id,
    });
    setPlaces((prevPlaces) =>
      prevPlaces.filter((item) => item.place._id !== place._id)
    );
  }

  return (
    <div>
      <AccountNav />
      {places.length === 0 && (
        <h1 className="text-center text-3xl font-semibold my-20">
          Let&apos;s add hotels to your wishlist !!!
        </h1>
      )}
      <div className="lg:mx-20 mx-10 my-10 mt-6 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 &&
          places.map((doc) => (
            <div key={doc.place._id}>
              <div className="border-2 p-4 rounded-xl shadow-lg">
                <Link to={"/place/" + doc.place._id}>
                  <div className="bg-gray-500 mb-2 rounded-2xl flex">
                  </div>
                  <div className="h-24">
                    <h2 className="font-bold">{doc.place.title}</h2>
                    <h3 className="text-sm text-gray-500">
                    </h3>
                  </div>
                </Link>
                <div className="mt-1 flex justify-between items-end">
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
