import React from 'react';
import Technologicalcar from "../assets/mercedes-benz-visio.format-jpeg.jpegquality-70.width-960.jpg"; // Example image
import Applephone from "../assets/Apple-iPhone-16.jpg"; // Example image
import Newlaptop from "../assets/download (1).jfif"; // Example image

function Technology({ darkmode }) {
  return (
    <div>
      {/* Technology Section */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} py-16 min-h-screen px-4 md:px-16`}>
        <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
          Latest in Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technology Card 1 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Technologicalcar} alt="Electric Vehicle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Automotive
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Mercedes Vision EQXX
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Revolutionary electric vehicle design pushing the boundaries of aerodynamics and efficiency.
              </p>
              <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                Learn more →
              </button>
            </div>
          </div>

          {/* Technology Card 2 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Applephone} alt="iPhone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Mobile
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                iPhone 16 Pro Concept
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Next-generation iPhone featuring advanced AI capabilities and revolutionary camera system.
              </p>
              <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                Learn more →
              </button>
            </div>
          </div>

          {/* Technology Card 3 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Newlaptop} alt="Laptop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Computing
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Next-Gen Computing
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Quantum-powered laptops promising unprecedented processing capabilities.
              </p>
              <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;