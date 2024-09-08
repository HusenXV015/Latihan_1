import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";

export default function Card({ hero, url }) {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const addToFavourites = async (Id) => {
    try {
      await axios.post(
        `${url}/favourites/${Id}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Toastify({
        text: "Hero added to favourites!",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#4CAF50",
          color: "#ffffff",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
      navigate("/favourite");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response?.data?.error || "Failed to add hero to favourites",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#ffffff",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  };

  return (
    <>
      <div className="group">
        <div className="relative">
          <div className="w-full">
            <img
              src={hero.imageUrl}
              className="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md"
            />
            <div className="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md">
              <p className="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">
                {hero.name}
              </p>
              <p className="text-md text-white inline-block align-start text-left pl-2">
                {hero.type}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-16">
          <button
            onClick={() => addToFavourites(hero.id)}
            className="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold"
          >
            Choose Hero
          </button>
        </div>
      </div>
    </>
  );
}
