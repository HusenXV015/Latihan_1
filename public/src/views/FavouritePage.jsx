import axios from "axios";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import CardFavorite from "../components/CardFavourites";

export default function Favourite({ url }) {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  async function fecthFavourite() {
    try {
      const { data } = await axios.get(`${url}/favourites`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setFavorites(data || []);
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  }
  useEffect(() => {
    fecthFavourite();
  }, []);

  return (
    <>
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl tracking-widest text-white text-center uppercase font-bold">
          <span class="block">Favourites</span>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
        <main className="grid grid-cols-3 gap-5 px-10 my-8">
            {favorites.map((favorite) => {
              return <CardFavorite key={favorite.id} favorite={favorite} hero={favorite.Hero}/>;
            })}
          </main>
      </div>
    </>
  );
}
