import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faClock } from '@fortawesome/free-solid-svg-icons';
import Neuralink from "../assets/Neuralink.jpg"; // Example image
import Daleai from "../assets/DALL·E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.jpg"; // Example image
import Vreality from "../assets/wwdc-2023-060523-apple-pro-vision-hands-on-7.jpg"; // Example image

function News({ darkmode }) {
  return (
    <div>
      {/* News Section */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} min-h-fit py-10`}>
        <h1 className={`${darkmode ? 'text-white' : 'text-black'} text-4xl font-bold text-center mt-14 md:mt-4 mb-6`}>
          Latest Tech News
        </h1>
        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-2xl mx-auto mb-12 px-4`}>
          Stay updated with the most recent developments in technology and innovation.
        </p>

        {/* Featured News Item */}
        <div className='flex flex-col md:flex-row gap-8 mb-12'>
          <div className='w-full md:w-1/2'>
            <img 
              src={Neuralink} 
              alt="Neuralink" 
              className='w-full h-[400px] rounded-xl object-cover hover:scale-[1.02] transition-transform'
            />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center'>
            <span className="text-blue-500 font-semibold mb-2">BREAKING NEWS</span>
            <h2 className={`text-2xl font-semibold mb-4 ${darkmode ? 'text-white' : 'text-black'}`}>
              Neuralink's First Human Brain Implant Shows Promising Results
            </h2>
            <p className="text-lg mb-4">Neuralink's groundbreaking brain-computer interface demonstrates successful neural activity monitoring in its first human trial participant.</p>
            <p className="text-lg mb-6">The patient can now control a computer cursor through thought alone, marking a significant milestone in neurotechnology.</p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">March 21, 2024</span>
              <span className="mr-4">•</span>
              <span>5 min read</span>
            </div>
            <button className={`mt-6 px-6 py-2 rounded-lg ${darkmode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90 w-fit`}>
              Read Full Story
            </button>
          </div>
        </div>

        {/* Secondary News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* News Item 1 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden`}>
            <img src={Daleai} alt="AI News" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-purple-500 text-sm font-semibold">ARTIFICIAL INTELLIGENCE</span>
              <h3 className={`text-xl font-semibold my-2 ${darkmode ? 'text-white' : 'text-black'}`}>
                GPT-5 Development Announcement
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                OpenAI reveals plans for next-generation language model with unprecedented capabilities.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 19, 2024</span>
                <span className="mx-2">•</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden`}>
            <img src={Vreality} alt="VR News" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-green-500 text-sm font-semibold">VIRTUAL REALITY</span>
              <h3 className={`text-xl font-semibold my-2 ${darkmode ? 'text-white' : 'text-black'}`}>
                Apple Vision Pro Sales Exceed Expectations
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                First month sales surpass industry predictions, showing strong market demand for mixed reality.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 20, 2024</span>
                <span className="mx-2">•</span>
                <span>3 min read</span>
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-white shadow-lg'} rounded-xl overflow-hidden`}>
            <img src={Neuralink} alt="Neuralink News" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-blue-500 text-sm font-semibold">NEUROTECHNOLOGY</span>
              <h3 className={`text-xl font-semibold my-2 ${darkmode ? 'text-white' : 'text-black'}`}>
                Neuralink's Latest Updates
              </h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                The latest advancements in brain-computer interfaces are paving the way for new treatments.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 22, 2024</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;