import React from 'react';
import aboutImg from '../../../assets/about-img.png';

const AboutMe = () => {
    return (
        <section className='m-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div className='bg-base-200 border-x-4 border-indigo-900 rounded-tl-full rounded-bl-full rounded-br-full m-auto overflow-hidden '>
                    <img className='' src={aboutImg} alt="" />
                </div>
                
                <div className='hover:-translate-y-4'>
                    <h2 className='text-5xl text-purple-600 mt-10 mb-3'>About Me</h2>
                    <p className='text-lg'>
                        I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! I love building front end applications. I believe that if you do something with your love and passion, the chances of success are much higher. if you're looking for a developer to add to your team, I'd love to hear from you! <br/> <br/>
                        When I'm not coding, I'm likely at the gym or surfing the city with my longboard You can find me on GitHub, Twitter and LinkedIn.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;