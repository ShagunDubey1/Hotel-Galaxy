import { useState,useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navigation = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                ref={ref}
                className={`fixed top-0 left-0 right-0 z-50 bg-primary-color w-full flex justify-center   items-start md:items-center flex-col md:flex-row ${
                    !scrolling ? "md:bg-transparent" : "md:bg-black"
                }`}
            >
                <nav className=" relative w-full flex justify-between items-center p-4 max-w-[1140px] container">
                    <div>
                        <h4 className="text-white md:text-primary-color text-xl font-semibold md:font-normal md:text-2xl lg:text-3xl uppercase">
                            Hotel Galaxy
                        </h4>
                    </div>

                    <div className=" md:hidden block">
                        {showNavbar ? (
                            <button
                                className=" flex justify-center items-center"
                                onClick={() => {
                                    setShowNavbar(
                                        (prevShowNavbar) => !prevShowNavbar,
                                    );
                                }}
                            >
                                <RxCross2 className=" text-white text-3xl" />
                            </button>
                        ) : (
                            <button
                                className=" flex justify-center items-center"
                                onClick={() => {
                                    setShowNavbar(
                                        (prevShowNavbar) => !prevShowNavbar,
                                    );
                                }}
                            >
                                <RxHamburgerMenu className=" text-white text-3xl" />
                            </button>
                        )}
                    </div>

                    {/* ===================navigation bar================================= */}
                    <div className=" hidden md:flex justify-center items-center gap-8 ">
                        <ul className=" text-white flex justify-center items-center gap-5 text-xl font-semibold font-['Josefin_Sans'] cursor-pointer">
                            <li>Home</li>
                            <li>About</li>
                            <li>Rooms</li>
                            <li>Gallery</li>
                            <li>Meetings & Events</li>
                            <li>Contact</li>
                        </ul>
                        <button className=" hidden bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block">
                            Book Now
                        </button>
                    </div>
                    {/* ===================navigation bar================================= */}
                </nav>
            </header>
            {/* =================toggle navigation bar===================== */}
            {showNavbar && (
                <div className=" fixed w-full bg-white z-20">
                    <ul className=" w-full flex flex-col justify-center items-start text-lg  font-semibold font-['Josefin_Sans'] cursor-pointer z-40">
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-secondory-color hover:font-bold">
                            Home
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-secondory-color hover:font-bold">
                            About
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-secondory-color hover:font-bold">
                            Rooms
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-secondory-color hover:font-bold">
                            Gallery
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-secondory-color hover:font-bold">
                            Meetings & Events
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-secondory-color hover:font-bold">
                            Contact
                        </li>
                    </ul>
                </div>
            )}
            {/* =================toggle navigation bar===================== */}
        </>
    );
};

export default Navigation;
