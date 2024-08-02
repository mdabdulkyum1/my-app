import React from 'react';
import webgb from '../assets/images/webbg.png'; // Adjust the path as needed

function Home() {
    return (
        <>
            <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${webgb})` }}>
                <div className="absolute inset-0 bg-navyblue opacity-60 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                        <p className="text-xl mb-8">Explore my work and projects</p>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
