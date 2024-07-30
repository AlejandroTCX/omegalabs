'use client'
import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { useRouter } from 'next/navigation';


const Page = () => {
    const route = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const totalData = () =>{
    let totalCharacters = data.length();
    return totalCharacters
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al llamar el API');
        }
        return response.json();
      })
      .then(data => {
        setData(data.results); // Asumiendo que 'results' es un array en la respuesta
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <Card data={data} type='characters' />
        <button className='bg-blue-800 text-xl mb-5 mt-5rounded px-4 py-2' onClick={() => route.push('./locations')}>
          Locations
        </button>
      </div>
    </div>
  );
};

export default Page;