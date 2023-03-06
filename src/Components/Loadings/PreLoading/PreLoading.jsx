import React from 'react';
import Logo from '../../Logo/Logo';

const PreLoading = () => {
    return (
        <section class="bg-black relative place-items-center grid h-screen w-screen gap-4">   
          <div class="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
          <div class="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
          <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
          <Logo />
        </section>
    );
};

export default PreLoading;