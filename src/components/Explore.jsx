import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faRobot, faBrain, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Ai from "../assets/images.jfif";
import Spacex from "../assets/spacex.jfif";
import Daleai from "../assets/DALL·E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.jpg";
import Vreality from "../assets/wwdc-2023-060523-apple-pro-vision-hands-on-7.jpg";
import Neuralink from "../assets/Neuralink.jpg";
import Headline from "../assets/x-ray-of-the-head-and-human-brain-in-concept-of-neural-connections-and-electrical-pulses-2D7CC6G.jpg";
import Gasstation from "../assets/EV-in-2022.jpg";
import Nachinelearning from "../assets/img-gg.jpg";

function Explore({ darkmode }) {
  return (
    <div>
      {/* Explore Section */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} min-h-fit py-10`}>
        <h1 className={`${darkmode ? 'text-white' : 'text-black'} text-4xl font-bold text-center mt-14 md:mt-4 mb-6`}>
          Explore The World of Technology
        </h1>
        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-2xl mx-auto mb-12 px-4`}>
          Discover the latest innovations in AI, Space Exploration, Virtual Reality, and more. Stay ahead with cutting-edge technological advancements.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-10 max-w-7xl mx-auto'>
          {/* AI Card */}
          <div className={`${darkmode ? 'bg-[#242824] hover:bg-[#2c302c]' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 transition-all duration-300 group cursor-pointer`}>
            <div className='relative h-[250px] mb-4 overflow-hidden rounded-lg'>
              <img src={Ai} alt="AI" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>
                AI & ML
              </div>
            </div>
            <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
              Artificial Intelligence
            </h3>
            <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
              Exploring the frontiers of machine learning and AI applications in everyday life.
            </p>
            <div className='flex items-center justify-between'>
              <span className={`${darkmode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
                Latest Updates
              </span>
              <FontAwesomeIcon icon={faRobot} className={`${darkmode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Space Exploration Card */}
          <div className={`${darkmode ? 'bg-[#242824] hover:bg-[#2c302c]' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 transition-all duration-300 group cursor-pointer`}>
            <div className='relative h-[250px] mb-4 overflow-hidden rounded-lg'>
              <img src={Spacex} alt="Space Exploration" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm'>
                Space
              </div>
            </div>
            <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
              Space Exploration
            </h3>
            <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
              Following the latest developments in space technology and interplanetary missions.
            </p>
            <div className='flex items-center justify-between'>
              <span className={`${darkmode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
                SpaceX Updates
              </span>
              <FontAwesomeIcon icon={faRocket} className={`${darkmode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* DALL-E Card */}
          <div className={`${darkmode ? 'bg-[#242824] hover:bg-[#2c302c]' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 transition-all duration-300 group cursor-pointer`}>
            <div className='relative h-[250px] mb-4 overflow-hidden rounded-lg'>
              <img src={Daleai} alt="AI Art" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm'>
                AI Art
              </div>
            </div>
            <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
              AI Generated Art
            </h3>
            <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
              Discovering the intersection of artificial intelligence and creative expression.
            </p>
            <div className='flex items-center justify-between'>
              <span className={`${darkmode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
                Creative AI
              </span>
              <FontAwesomeIcon icon={faBrain} className={`${darkmode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* VR Card */}
          <div className={`${darkmode ? 'bg-[#242824] hover:bg-[#2c302c]' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 transition-all duration-300 group cursor-pointer`}>
            <div className='relative h-[250px] mb-4 overflow-hidden rounded-lg'>
              <img src={Vreality} alt="VR" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm'>
                VR & AR
              </div>
            </div>
            <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
              Virtual Reality
            </h3>
            <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
              Exploring the latest advancements in virtual and augmented reality technologies.
            </p>
            <div className='flex items-center justify-between'>
              <span className={`${darkmode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
                Latest Updates
              </span>
              <FontAwesomeIcon icon={faGlobe} className={`${darkmode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} py-16 px-4 md:px-16`}>
        <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
          Recent Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Innovation Card 1 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden`}>
            <img src={Neuralink} alt="Neuralink" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Neuralink's Breakthrough
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Neuralink's latest advancements in brain-computer interfaces are paving the way for new treatments.
              </p>
            </div>
          </div>

          {/* Innovation Card 2 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden`}>
            <img src={Headline} alt="Neuroscience" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Neuroscience Discoveries
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                New research in neuroscience is changing our understanding of the human brain.
              </p>
            </div>
          </div>

          {/* Innovation Card 3 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden`}>
            <img src={Nachinelearning} alt="Machine Learning" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                Advanced Machine Learning
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Breakthrough algorithms enabling more efficient and accurate AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;