// components/Card.js
import React from 'react';

const Card = ({ data, type }) => {
  return (
    <div className="mx-auto max-w-2xl"> {/* Clase para centrar y limitar el ancho */}
      <h2 className="text-2xl font-bold mb-4 text-center"> {/* Clase para centrar el texto */}
        {type === 'locations' ? 'Locations' : 'Characters'}
      </h2>
      <div className='grid grid-cols-3 gap-5'>
        {data.map(item => (
          <div key={item.id} className="text-yellow-500 mb-2 flex flex-col items-center"> {/* Clase para centrar los items */}
            {type === 'characters' && <img src={item.image} alt={item.name} className="w-24 h-24 mb-4 rounded-full" />}
            <span>{item.name}</span>
            <span>{item.status}</span>
            <span>{item.species}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
