import React from 'react';

const Skill = ({skill}) => {
    const {_id, name, image, experience} = skill;

    // console.log(skill);

    return (
        <div className="flex flex-col gap-2 p-3 rounded-md justify-center items-center hover:border hover:border-blue-600 bg-base-200 shadow-xxl">
            <figure>
                <img className='w-12 h-12' src={image} alt="Skill"/>
            </figure>
            <div className="text-white">
                <h2 className="text-2xl">{name}</h2>
                {/* <p>{experience}</p> */}
            </div>
        </div>
    );
};

export default Skill;