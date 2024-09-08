import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

export default function Card({ url, fetchHeroes, hero }) {
  const navigate = useNavigate();

  // async function GetFavorite(id) {

  // }
  return (
    <>
    <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
      <div class="group">
        <div class="relative">
          <div class="w-full">
            <img
              src={hero.imageUrl}
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md"
            />
            <div class="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md">
              <p class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">
                {hero.name}
              </p>
              <p class="text-md text-white inline-block align-start text-left pl-2">
                {hero.type}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-16">
          <button class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold">
            Choose Hero
          </button>
        </div>
      </div>
    </>
  );
}
