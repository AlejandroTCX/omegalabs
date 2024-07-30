'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

function Page() {
    const route = useRouter();
  return (
    <div className='flex flex-col items-center mt-10'>
      <p className='text-2xl font-bold mb-5'>Rick and Morty API</p>
      <div className='flex justify-evenly w-full max-w-md'>
        <button className='bg-blue-800 text-xl mb-5 srounded px-4 py-2' onClick={toLocations =>{route.push('/mainRickAndMorty/locations')}}>Locations</button>
        <button className='bg-blue-800 text-xl mb-5 rounded  px-4 py-2'onClick={toCharacters =>{route.push('/mainRickAndMorty/characters')}}>Characters</button>
        <button className='bg-blue-800 text-xl mb-5 rounded  px-4 py-2'>Episodes</button>
      </div>
    </div>
  );
}

export default Page;
