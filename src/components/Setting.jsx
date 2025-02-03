import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCog } from '@fortawesome/free-solid-svg-icons';

function Setting({ darkmode, toggleDarkmode }) {
    const handleThemeChange = (event) => {
        const selectedMode = event.target.value;
        if (selectedMode === 'dark') {
            toggleDarkmode(true);
        } else {
            toggleDarkmode(false);
        }
    };

    return (
        <div className={`${darkmode ? 'bg-[#191c17] text-white' : 'bg-white text-black'} min-h-screen p-8`}>
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            
            <div className="max-w-2xl">
                {/* Theme Selection */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-opacity-50 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Theme</h2>
                        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Choose your preferred theme
                        </p>
                    </div>
                    <select 
                        value={darkmode ? 'dark' : 'light'} 
                        onChange={handleThemeChange} 
                        className={`border rounded-lg p-2 ${darkmode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                    >
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                    </select>
                </div>

                {/* Notification Settings */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-opacity-50 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Manage your notification preferences
                        </p>
                    </div>
                    <input type="checkbox" className="toggle-checkbox" />
                </div>

                {/* Language Selection */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-opacity-50 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Language</h2>
                        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Select your preferred language
                        </p>
                    </div>
                    <select className={`border rounded-lg p-2 ${darkmode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                </div>

                {/* Account Settings */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-opacity-50 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
                        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Manage your account details
                        </p>
                    </div>
                    <button className={`px-4 py-2 rounded-lg ${darkmode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90`}>
                        Edit
                    </button>
                </div>

                {/* More Settings */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-opacity-50 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Privacy Settings</h2>
                        <p className={`${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Control your privacy settings
                        </p>
                    </div>
                    <button className={`px-4 py-2 rounded-lg ${darkmode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90`}>
                        Manage
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Setting;