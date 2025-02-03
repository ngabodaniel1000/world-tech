import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Explore from './Explore'
import Invention from './Invention'
import Technology from './Technology'
import Science from './Science'
import News from './News'
import "../index.css"
import Aboutus from './Aboutus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCompass, faNewspaper, faLightbulb, faLaptop, faFlask, faUsers, faSun, faMoon, faBars, faGear } from '@fortawesome/free-solid-svg-icons'
import Setting from './Setting'

function Nav() {
    const [darkmode, setDarkmode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDarkmode = () => {
        setDarkmode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} flex flex-cols h-[100%] overflow-auto relative`}>
            <BrowserRouter>
                <div className="md:hidden fixed top-4 left-4 z-[60]">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className={`text-2xl cursor-pointer ${darkmode ? 'text-white' : 'text-black'}`}
                        onClick={toggleMobileMenu}
                    />
                </div>
                <nav className={`${darkmode ? 'bg-[#191c17]' : 'bg-white'} fixed min-h-screen p-10 
                    ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0 transition-transform duration-300 ease-in-out z-[50]
                    border-r ${darkmode ? 'border-gray-400' : 'border-gray-400'} shadow-lg`}> 
                    <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-3xl`}>World-Tech</h2>
                    <ul className={`${darkmode ? 'text-white' : 'text-black'} text-xl block mt-10`}>
                        <li><a href="/"><FontAwesomeIcon icon={faHome} className="mr-2" /> Home</a></li>
                        <li className='mt-7'><a href='/explore'><FontAwesomeIcon icon={faCompass} className="mr-2" /> Explore</a></li>
                        <li className='mt-7'><a href="/latest-news"><FontAwesomeIcon icon={faNewspaper} className="mr-2" /> Latest news</a></li>
                        <li className='mt-7'><a href='/inventions'><FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Inventions</a></li>
                        <li className='mt-7'><a href="/technology"><FontAwesomeIcon icon={faLaptop} className="mr-2" /> Technology</a></li>
                        <li className='mt-7'><a href="/science"><FontAwesomeIcon icon={faFlask} className="mr-2" /> Science</a></li>
                        <li className='mt-7'><a href="/about-us"><FontAwesomeIcon icon={faUsers} className="mr-2" /> About us</a></li>
                        <li className='mt-7'><a href="/settings"><FontAwesomeIcon icon={faGear} className="mr-2" />Setting</a></li>
                    </ul>
                   
                </nav>

                <div className={`w-full md:ml-[240px] pb-10 ${mobileMenuOpen ? 'ml-[240px]' : 'ml-0'} 
                    transition-margin duration-300 ease-in-out`}>
                    <Routes>
                        <Route path="/" element={<Home darkmode={darkmode} />} />
                        <Route path="/explore" element={<Explore darkmode={darkmode} />} />
                        <Route path="/inventions" element={<Invention darkmode={darkmode} />} />
                        <Route path="/technology" element={<Technology darkmode={darkmode} />} />
                        <Route path="/science" element={<Science darkmode={darkmode} />} />
                        <Route path="/latest-news" element={<News darkmode={darkmode} />} />
                        <Route path="/about-us" element={<Aboutus darkmode={darkmode} />} />
                        <Route path="/settings" element={<Setting darkmode={darkmode} toggleDarkmode={toggleDarkmode} />} />
                    </Routes>
                </div>
            </BrowserRouter> 
        </div>
    )
}

export default Nav;