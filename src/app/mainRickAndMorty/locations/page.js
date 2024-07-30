'use client'
import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { useRouter } from 'next/navigation';


const Page = () => {

  const route = useRouter();
 
  const info= 'locations'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
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
      <Card data={data} type='locations' />
        <button className='bg-blue-800 text-xl mb-5 mt-20 rounded px-4 py-2' onClick={toCharacters =>{route.push('./characters')}}>Characers</button>
        <button className='bg-blue-800 text-xl mb-5 mt-20 rounded px-4 py-2' onClick={toCharacters =>{route.push('./')}}>Regresar</button>
      </div>
    </div>
  );
};

export default Page;
