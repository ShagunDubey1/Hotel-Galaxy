const Navigation = () => {
    return (
        <header className=" bg-black relative w-full flex justify-center items-center flex-row">
            <nav className=" relative w-full flex justify-between items-center p-4 max-w-[1140px]">
                <div>
                    <h4 className=" text-primary-color text-3xl uppercase">
                        Hotel Galaxy
                    </h4>
                </div>
                <div className=" flex justify-center items-center gap-8">
                    <ul className=" text-white flex justify-center items-center gap-5 text-xl font-semibold font-['Josefin_Sans']">
                        <li>Home</li>
                        <li>About</li>
                        <li>Rooms</li>
                        <li>Meetings & Events</li>
                        <li>Contact</li>
                    </ul>
                    <button className=" bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide">
                        Book Now
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
