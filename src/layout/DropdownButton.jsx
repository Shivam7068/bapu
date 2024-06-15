import React, { useState } from 'react';

const DropdownButton = ({ text, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block ">
            <button
                type="button"
                className="px-3 py-2 rounded hover:text-emerald-300 capitalize lg:text-green-700 text-white focus:outline-none flex "
                onClick={toggleDropdown}
            >
                {text}

            </button>
            {isOpen && children}
        </div>
    );
};

export default DropdownButton;
