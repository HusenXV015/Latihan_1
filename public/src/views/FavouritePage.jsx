// src/pages/FavouritePage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavouritesAsync } from '../features/favoriteSlice';
import CardFavorite from '../components/CardFavourites';

export default function FavouritePage({ url }) {
  const dispatch = useDispatch();
  const { favourites, loading, error } = useSelector((state) => state.favourite);

  useEffect(() => {
    dispatch(fetchFavouritesAsync(url));
  }, [dispatch, url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl tracking-widest text-white text-center uppercase font-bold">
        <span className="block">Favourites</span>
      </h2>
      <main className="grid grid-cols-3 gap-5 px-10 my-8">
        {favourites.map((favorite) => (
          <CardFavorite key={favorite.id} favorite={favorite} hero={favorite.Hero} />
        ))}
      </main>
    </div>
  );
}
