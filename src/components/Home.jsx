import { faUser, faRocket, faRobot, faVrCardboard, faBrain, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Ai from "../assets/images.jfif"
import Space from "../assets/spacex_starship_hls_artemis_iii_2_crew_0-975e19a97d8bacac58568b64cee1716b9a590d57.jpg"
import Spacex from "../assets/spacex.jfif"
import Daleai from "../assets/DALL·E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.jpg"
import Vreality from "../assets/wwdc-2023-060523-apple-pro-vision-hands-on-7.jpg"
import Neuralink from "../assets/Neuralink.jpg"
import Headline from "../assets/x-ray-of-the-head-and-human-brain-in-concept-of-neural-connections-and-electrical-pulses-2D7CC6G.jpg"
import Vr from "../assets/skynews-apple-headset_6179275.jpg"
import Technologicalcar from "../assets/mercedes-benz-visio.format-jpeg.jpegquality-70.width-960.jpg"
import Applephone from "../assets/Apple-iPhone-16.jpg"
import Newsoldier from "../assets/360_F_880265595_AEYLa9D0iEjtm4fefdGlnUzTpijtIq8A.jpg"
import Newlaptop from "../assets/download (1).jfif"
import Gasstation from "../assets/EV-in-2022.jpg"
import Nachinelearning from "../assets/img-gg.jpg"
function Home({darkmode}) {
  return (
    <div>
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

          {/* VR/AR Card */}
          <div className={`${darkmode ? 'bg-[#242824] hover:bg-[#2c302c]' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 transition-all duration-300 group cursor-pointer`}>
            <div className='relative h-[250px] mb-4 overflow-hidden rounded-lg'>
              <img src={Vr} alt="Virtual Reality" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm'>
                VR/AR
              </div>
            </div>
            <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
              Virtual Reality
            </h3>
            <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
              Exploring the latest advancements in virtual reality technology and its applications.
            </p>
            <div className='flex items-center justify-between'>
              <span className={`${darkmode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
                VR/AR Updates
              </span>
              <FontAwesomeIcon icon={faVrCardboard} className={`${darkmode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className={`flex flex-col mt-16 mb-7 ${darkmode ? 'bg-[#191c17] text-white' : 'bg-white text-black'} px-4 md:px-16 py-8`}>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Latest Tech Headlines</h1>
          <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Stay informed with the most recent developments in technology and innovation
          </p>
        </div>
        
        {/* Featured News Item */}
        <div className='flex flex-col md:flex-row gap-8 mb-12'>
          <div className='w-full md:w-1/2'> 
            <img 
              src={Neuralink} 
              alt="neuralink" 
              className='w-full h-[400px] rounded-xl object-cover hover:scale-[1.02] transition-transform'
            />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center'>
            <span className="text-blue-500 font-semibold mb-2">BREAKING NEWS</span>
            <h2 className="text-2xl font-semibold mb-4">Neuralink's First Human Brain Implant Shows Promising Results</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* News Item 1 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden`}>
            <img src={Vreality} alt="VR" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-green-500 text-sm font-semibold">VIRTUAL REALITY</span>
              <h3 className="text-xl font-semibold my-2">Apple Vision Pro Sales Exceed Expectations</h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>First month sales surpass industry predictions, showing strong market demand for mixed reality.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 20, 2024</span>
                <span className="mx-2">•</span>
                <span>3 min read</span>
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden`}>
            <img src={Daleai} alt="AI" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-purple-500 text-sm font-semibold">ARTIFICIAL INTELLIGENCE</span>
              <h3 className="text-xl font-semibold my-2">GPT-5 Development Announcement</h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>OpenAI reveals plans for next-generation language model with unprecedented capabilities.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 19, 2024</span>
                <span className="mx-2">•</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden`}>
            <img src={Space} alt="Space" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-red-500 text-sm font-semibold">SPACE EXPLORATION</span>
              <h3 className="text-xl font-semibold my-2">SpaceX's Starship Completes Orbital Test</h3>
              <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Historic milestone achieved as Starship successfully returns from complete orbital flight.</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 18, 2024</span>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Updates Ticker */}
        <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} p-4 rounded-xl`}>
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            <span className="font-semibold">LATEST:</span>
            <span className="text-blue-500">Tesla announces new AI chip development</span>
            <span>•</span>
            <span className="text-green-500">Meta's new AR glasses leaked</span>
            <span>•</span>
            <span className="text-purple-500">Google's quantum computer breakthrough</span>
          </div>
        </div>
      </div>

      {/* Technology, Science & Inventions Section */}
      <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} py-16 px-4 md:px-16`}>
        {/* Technology Section */}
        <div className="mb-16">
          <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
            Latest in Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
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

            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
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

            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
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

        {/* Science Section */}
        <div className="mb-16">
          <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
            Scientific Breakthroughs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
              <div className="relative h-72">
                <img src={Headline} alt="Neural Science" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
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

            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
              <div className="relative h-72">
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

        {/* Inventions Section */}
        <div>
          <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl font-bold mb-8 text-center`}>
            Revolutionary Inventions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
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

            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
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

            <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} rounded-xl overflow-hidden group`}>
              <div className="relative h-64">
                <img src={Vr} alt="VR Technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Virtual Reality
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${darkmode ? 'text-white' : 'text-black'} text-xl font-semibold mb-3`}>
                  Next-Gen VR Systems
                </h3>
                <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Revolutionary haptic feedback system for immersive virtual experiences.
                </p>
                <button className={`text-sm ${darkmode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className={`${darkmode ? 'bg-[#242824]' : 'bg-gray-50'} py-20 px-4 md:px-16`}>
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

      {/* Footer */}
      <footer className={`${darkmode ? 'bg-[#191c17]' : 'bg-gray-900'} text-white py-16 px-4 md:px-16`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">TechNews</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Your premier source for the latest technology news, innovations, and breakthroughs. Stay informed, stay ahead.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Innovations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & ML</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 TechNews. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home