import React from 'react';
// bg-gray-600
const Dropdown = ({menuItems}) => {
  return (
    <div className="absolute right-0 md:right-2 mt-8 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg border-b bg-gray-600 border-gray-200/30  navmorphism backdrop-blur-xl transition-all" id="user-dropdown">
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
      </div>
      <ul className="py-2 px-5 md:hidden flex flex-col justify-center items-start" aria-labelledby="user-menu-button">
        {
          menuItems
        }
      </ul>
    </div>
  );
};

export default Dropdown;