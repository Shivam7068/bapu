const DropdownMenu = ({ children }) => {
    return (
        <div className=" absolute bg-green-500 hover:bg-[#49b845] hover:text-white p-5 w-[250px] text-white flex flex-col justify-center items-center "
            onMouseLeave={() => handleHover(false)}>
            {children}
        </div>
    );
};

export default DropdownMenu;

