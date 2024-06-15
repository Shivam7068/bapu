import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleClickLink = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div tabIndex={0} role="button" className="flex  justify-center items-center gap-2 m-1 text-green-700 hover:bg-[#49b845] hover:text-white p-2 ">
                <div>
                    {item.title}

                </div>
                <div>
                    <FaAngleDown />
                </div>
            </div>
            {isOpen && (
                <ul className="dropdown-content z-[9999] menu p-2 shadow bg-gray-200 md:bg-white rounded-box w-52  absolute left-0 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {item.items.map((obj, index) => (
                        <Link key={index} to={obj.to} className="even:flex-row block px-4 py-2 text-[18px] hover:bg-[#49b845] hover:text-white text-green-700" onClick={handleClickLink}>
                            {obj.text}
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;