import { useNavigate } from "react-router-dom";

export default function CardFavorite({favorite,hero}) {
    const navigate = useNavigate()
    function handleUpdate(heroId){
        navigate(`/favourite/${heroId}`)
    }
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
              <p className="text-md text-white inline-block align-start text-left pl-2 mb-2">
                {favorite.role}
              </p>
              <p className="text-md text-purple-400 inline-block align-start text-left pl-2">
                Power : {favorite.power}
              </p>
              <p className="text-md text-purple-400 inline-block align-start text-left pl-2">
                Role: {favorite.role}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-16">
          <button 
          className="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold"
          onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
