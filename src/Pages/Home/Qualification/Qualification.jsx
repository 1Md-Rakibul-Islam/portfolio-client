import React, { useState } from 'react';
import { set } from 'react-hook-form';
import Education from '../Home/Education/Education';
import Experience from '../Home/Experience/Experience';
import Skills from '../Skills/Skills';

const Qualification = () => {
    
    const [index, setIndex] = useState(0);

    return (
        <section className='mt-40'>
            {/* Tab index */}
            <div>
                <ul className="flex justify-center flex-wrap text-sm font-medium text-center border-gray-700 text-gray-400">
                    <li onClick={() => setIndex(0)} className="mr-2 hover:cursor-pointer">
                        <a className={`inline-block p-4 hover:text-purple-700 rounded-t-lg ${ index === 0 && 'bg-gray-800 text-purple-700'} border-b`}>Skills</a>
                    </li>
                    <li onClick={() => setIndex(1)} className="mr-2 hover:cursor-pointer">
                        <a className={`inline-block p-4 hover:text-purple-700 rounded-t-lg ${ index === 1 && 'bg-gray-800 text-purple-700'} border-b`}>Education</a>
                    </li>
                    <li onClick={() => setIndex(2)} className="mr-2 hover:cursor-pointer">
                        <a className={`inline-block p-4 hover:text-purple-700 rounded-t-lg ${ index === 2 && 'bg-gray-800 text-purple-700'} border-b`}>Experience</a>
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            <div>
                <div hidden={index !== 0}>
                    <Skills />                    
                </div>
                <div hidden={index !== 1}>
                    <Education />
                </div>
                <div hidden={index !== 2}>
                    <Experience />
                </div>
            </div>
        </section>
    );
};

export default Qualification;