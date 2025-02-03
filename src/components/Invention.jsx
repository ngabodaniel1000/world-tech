import React from 'react';
import Gasstation from "../assets/EV-in-2022.jpg"; // Example image
import Newsoldier from "../assets/360_F_880265595_AEYLa9D0iEjtm4fefdGlnUzTpijtIq8A.jpg"; // Example image
import Nachinelearning from "../assets/img-gg.jpg"; // Example image

function Invention({ darkmode }) {
  return (
    <div>
      {/* Inventions Section */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} min-h-screen py-16 px-4 md:px-16`}>
        <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
          Revolutionary Inventions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Invention Card 1 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Gasstation} alt="EV Charging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Clean Energy
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Ultra-Fast EV Charging
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Revolutionary charging technology enables full charge in under 5 minutes.
              </p>
              <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                Learn more →
              </button>
            </div>
          </div>

          {/* Invention Card 2 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Newsoldier} alt="Military Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Defense
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Advanced Combat Systems
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Next-generation defense technology enhancing soldier safety and effectiveness.
              </p>
              <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                Learn more →
              </button>
            </div>
          </div>

          {/* Invention Card 3 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Nachinelearning} alt="Machine Learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                AI Research
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Advanced Machine Learning
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Breakthrough algorithms enabling more efficient and accurate AI systems.
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

export default Invention;