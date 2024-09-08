import axios from "axios";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import Card from "../components/Card";

export default function Home({ url }) {
  const [heroes, setHeroes] = useState([]);

  async function fetchHeroes() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(`${url}/heroes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      
      setHeroes(data||[]);
    } catch (error) {
      console.log(error);
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
    fetchHeroes();
  }, []);

  return (
    <>
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl tracking-widest text-white text-center uppercase font-bold">
          <span class="block">Choose your Hero</span>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
          <main className="grid grid-cols-3 gap-5 px-10 my-8">
            {heroes.map((hero) => {
              return <Card key={hero.id} hero={hero} />;
            })}
          </main>
      </div>
    </>
  );
}
