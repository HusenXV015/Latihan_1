import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroesAsync } from '../features/heroSlice';  
import Card from '../components/Card';

export default function Home({ url }) {
  const dispatch = useDispatch();
  const { heroes, loading, error } = useSelector((state) => state.hero);

  useEffect(() => {
    dispatch(fetchHeroesAsync(url));
  }, [dispatch, url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl tracking-widest text-white text-center uppercase font-bold">
        <span className="block">Choose your Hero</span>
      </h2>
      <main className="grid grid-cols-3 gap-5 px-10 my-8">
        {heroes.map((hero) => (
          <Card key={hero.id} hero={hero} url={url} />
        ))}
      </main>
    </div>
  );
}
