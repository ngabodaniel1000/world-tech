import React from 'react';
import Nachinelearning from "../assets/img-gg.jpg"; // Ensure the image path is correct

function Aboutus({ darkmode }) {
  return (
    <div>
      {/* About Us Section */}
      <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} min-h-screen py-20 px-4 md:px-16`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-4xl font-bold mb-6`}>
                About TechNews
              </h2>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg`}>
                We are passionate about bringing you the latest in technology news and innovations. Our team of expert writers and researchers work tirelessly to keep you informed about the rapidly evolving tech landscape.
              </p>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-8 text-lg`}>
                From artificial intelligence to space exploration, we cover breakthrough developments that shape our future. Join our community of tech enthusiasts and stay ahead of the curve.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className={`${darkmode ? 'text-white' : 'text-black'} text-2xl font-bold mb-2`}>10+ Years</h4>
                  <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>Of Excellence</p>
                </div>
                <div>
                  <h4 className={`${darkmode ? 'text-white' : 'text-black'} text-2xl font-bold mb-2`}>1M+</h4>
                  <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>Monthly Readers</p>
                </div>
              </div>
              <button className={`px-8 py-3 rounded-lg ${darkmode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90 transition-opacity`}>
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src={Nachinelearning} 
                alt="About Us" 
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Additional sections can be added here if needed */}
    </div>
  );
}

export default Aboutus;
