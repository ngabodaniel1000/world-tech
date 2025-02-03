import React from 'react';
import Neuralink from "../assets/Neuralink.jpg"; // Example image
import Headline from "../assets/x-ray-of-the-head-and-human-brain-in-concept-of-neural-connections-and-electrical-pulses-2D7CC6G.jpg"; // Example image
import Nachinelearning from "../assets/img-gg.jpg"; // Example image

function Science({ darkmode }) {
  return (
    <div>
      {/* Science Section */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} py-16 px-4 min-h-screen md:px-16`}>
        <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
          Scientific Breakthroughs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Breakthrough Card 1 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Neuralink} alt="Neuralink" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                Neuroscience
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Brain-Computer Interface
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                New discoveries in neural mapping revolutionize our understanding of consciousness.
              </p>
              <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                Learn more →
              </button>
            </div>
          </div>

          {/* Breakthrough Card 2 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden group`}>
            <div className="relative h-64">
              <img src={Headline} alt="Neuroscience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
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

export default Science;