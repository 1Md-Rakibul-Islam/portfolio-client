import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className='hover:curp
        '><Link to={'/'}><img className=" w-[35px]" src={brandLogo} alt="" srcset="" /></Link></div>
    );
};

export default Logo;