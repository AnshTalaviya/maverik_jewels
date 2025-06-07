import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import { useNavigate } from 'react-router-dom';

const Ring = () => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/collection?category=rings');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-3 pb-2 pt-10 bg-white max-w-6xl mx-auto gap-10">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full flex  ">
        <img 
          src="https://sgjewellery.com/cdn/shop/files/02_65fe24d4-0374-41bf-a703-b194ade34e2a.jpg?v=1685002546&width=1070" 
          alt="Ring on Finger" 
          className="rounded-lg  h-auto  shadow-lg  transition-transform duration-700 transform group-hover:scale-110" 
        />
      </div>

      {/* Right: Text */}
      <div className="md:w-1/2 w-full   text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Ring</h2>
        <p className="text-md text-gray-700 mb-1">Wrapped around my finger,</p>
        <p className="text-md text-gray-700 mb-1">A symbol of love and commitment,</p>
        <p className="text-md text-gray-700 mb-6">This ring will forever linger.</p>
        <SeeMoreButton onClick={handleSeeMore} />
      </div>
    </div>
  );
};

export default Ring;
