import React from 'react';

const Education = () => {
    return (
        <section className=" text-gray-100">
            <div className="mx-40 px-4 py-12">
                <div className="grid gap-10 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-28 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-purple-700">
                            <h3 className="text-3xl font-semibold">My Educations</h3>
                            <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Rakibul Islam</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-purple-700">
                                <h3 className="text-xl font-semibold tracking-wide">Diploma in Engineering</h3>
                                <h4 className="text-lg text-gray-300 my-2 tracking-wide">Shariatpur Polytechnic Institute</h4>
                                <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2007 - Dec 2012</time>
                                <p className="mt-5">
                                    I admitted on 4 Year Diploma in Computer Science and Engineering(CSE) at 'Shariatpur Polytechnic Institute, Shariatpur, Bangladesh . Now I'm studying there. I started a new chapter for a good career and started learning computer programming, Python, Java, JavaScript and more. I enjoyed these four years of polytechnic life very much.
                                    The life of the flying Engineering institute. Computer science is a vast and diverse field. Programming is way more than just code: programmers must design, create, solve problems,
                                    and think outside the box. These quotations from famous computer scientists and thinkers frame CS as a discipline that is incredibly flexible, occasionally frustrating, and constantly full of innovation.
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-purple-700">
                                <h3 className="text-xl font-semibold tracking-wide">Secondary Education</h3>
                                <h4 className="text-lg text-gray-300 my-2 tracking-wide">Jonail M.L High School</h4>
                                <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2013 - Dec 2018</time>
                                <p className="mt-5">
                                    I admitted on class six at 'Jonail M.L High School', in 2007 and studied there till class five (2012).
                                    The beginning of a new life.I love laughing childhood, classmates and that playground.This was my second best school in life.I miss my school.
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-purple-700">
                                <h3 className="text-xl font-semibold tracking-wide">Primary Education</h3>
                                <h4 className="text-lg text-gray-300 my-2 tracking-wide">H.S Kinder Garden</h4>
                                <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2007 - Dec 2012</time>
                                <p className="mt-5">Class One to Five (Primary School Certificate). Chapter 1st of Life. The beginning of school and education life.One day I will reach the goal just to keep going on these little's leg.
                                My childhood love my game too much.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;