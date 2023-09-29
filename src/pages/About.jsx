import { IoChevronForward } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";

import room1 from "../assets/Images/room1.jpeg";

import { BookNowBtn } from "../components/BookNowBtn";

import { useState } from "react";
import HeroWrapper from "../components/HeroWrapper";


const AboutUs = () => {
    return (
        <section className=" relative w-full flex flex-col items-center justify-center py-10">
            <div className=" mt-20 p-4 sm:p-8 md:p-10 flex flex-col justify-center items-center max-w-[1140px]">
                <p className=" uppercase text-primary-color text-[0.8rem]">
                    about us
                </p>
                <p className=" capitalize text-[2.25rem]">Since 10+ years</p>
                <p className=" text-center ">
                    At Hotel Galaxy Prayagraj, we take pride in providing a
                    luxurious and memorable stay experience in the heart of the
                    historic city of Prayagraj (formerly known as Allahabad).
                    Our commitment to excellence and unwavering dedication to
                    guest satisfaction have made us a preferred choice for
                    travelers seeking comfort, convenience, and warm
                    hospitality.
                </p>
            </div>
        </section>
    );
};

{
    /* BOOKING FORM  */
}
const Booking = () => {
    return (
        <section className=" relative w-full flex flex-col items-center justify-center pt-24">
            <div className="w-full h-auto md:h-[510px] lg:p-24 bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row md:flex-row justify-center items-center gap-4 p-4 max-w-[1140px]">
                <div className=" w-full  lg:w-2/4 xl:w-2/4 h-72 flex flex-col justify-evenly sm:p-0 md:p-4 lg:p-6 xl:p-6 ">
                    <div className="">
                        <div className=" flex flex-row text-primary-color ">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className=" text-3xl text-primary-color">
                            Feel free to Call us anytime!
                        </p>
                    </div>

                    <p>
                        Each of our guest rooms feature a private bath, wi-fi,
                        cable television and include full breakfast.
                    </p>

                    <div className=" flex flex-row flex-wrap items-center gap-4">
                        <span>
                            <RiCustomerService2Fill className="w-12 h-20" />
                        </span>
                        <div className="">
                            <p className=" flex flex-row font-sans text-sm items-center gap-1">
                                <BiPhoneCall /> +91-9918901686 ||{" "}
                                <GiRotaryPhone />
                                0532-2400507{" "}
                            </p>
                            <p>For more information</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[60%]  flex flex-col flex-wrap justify-center items-center bg-secondory-color py-8 px-6 sm:px-8 ">
                    <div className=" flex w-full justify-center items-center gap-3 sm:gap-6">
                        <div className=" w-[50%] flex justify-center flex-col md:p-2 py-4 sm:p-1 text-base bg-pale-yellow">
                            Check-in
                            <input
                                className=" bg-transparent border border-gray-300 p-4"
                                type="date"
                            />
                        </div>
                        <div className=" w-[50%] flex justify-center flex-col py-4  md:p-2 sm:p-1 text-base">
                            Check-out
                            <input
                                className=" bg-transparent border  border-gray-300 p-4"
                                type="date"
                            />
                        </div>
                    </div>
                    <div className=" flex w-full justify-center items-center gap-3 sm:gap-6">
                        <div className=" w-[50%]  flex justify-center flex-col md:p-2 py-4 sm:p-1 text-base">
                            Adult
                            <select
                                className="bg-transparent border border-gray-300 p-4"
                                name="check-in"
                                id=""
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="1">3</option>
                                <option value="2">4</option>
                                <option value="1">5</option>
                                <option value="2">6</option>
                            </select>
                        </div>
                        <div className="w-[50%] flex justify-center flex-col md:p-2 py-4 sm:p-1 text-base">
                            Children
                            <select
                                className=" bg-transparent border border-gray-300 p-4"
                                name="check-in"
                                id=""
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="1">3</option>
                                <option value="2">4</option>
                                <option value="1">5</option>
                                <option value="2">6</option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex w-full justify-center items-center gap-3 sm:gap-6">
                        <div className="w-[50%] flex justify-center flex-col md:p-2 py-4 sm:p-1 text-base">
                            Rooms
                            <select
                                className=" bg-transparent border border-gray-300 p-4"
                                name="check-in"
                                id=""
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="1">3</option>
                                <option value="2">4</option>
                                <option value="1">5</option>
                                <option value="2">6</option>
                            </select>
                        </div>
                        <div className=" w-[50%] flex justify-end flex-col md:p-2 py-4 sm:p-1 text-sm mt-4">
                            <BookNowBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FirstContainer = () => {
    return (
        <section className=" relative w-full  py-10">
            <div className="flex flex-col md:flex-row lg:flex-row justify-end  flex-wrap lg:m-14 md:m-10 max-w-[1140px] mr-auto ml-auto">
                <div className=" lg:w-1/2 w-full group">
                    <div className="lg:w-96 lg:h-64 md:w-64 md:h-44 mb-4 mr-4 border-2 border-black absolute transition-transform transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    <div className=" lg:w-96 lg:h-64 md:w-64 md:h-48  mt-4 ml-4  relative transition-transform transform group-hover:-translate-x-4 group-hover:-translate-y-4">
                        <img
                            src={room1}
                            alt="Hotal Galalxy"
                            className=" w-full"
                        />
                    </div>
                </div>

                <TabbedContent />
            </div>
        </section>
    );
};

const TabbedContent = () => {
    const [activeTab, setActiveTab] = useState("about");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-5 lg:w-1/2 flex flex-col gap-6">
            <div className=" text-3xl font-semibold flex flex-row justify-start gap-6">
                <button
                    className={
                        activeTab === "about" ? " text-primary-color" : ""
                    }
                    onClick={() => handleTabClick("about")}
                >
                    About
                    {activeTab === "about" && (
                        <div className=" bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                    )}
                </button>
                <button
                    className={
                        activeTab === "features" ? " text-primary-color" : ""
                    }
                    onClick={() => handleTabClick("features")}
                >
                    Features
                    {activeTab === "features" && (
                        <div className=" bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                    )}
                </button>
                <button
                    className={
                        activeTab === "info" ? " text-primary-color" : ""
                    }
                    onClick={() => handleTabClick("info")}
                >
                    Info
                    {activeTab === "info" && (
                        <div className=" bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                    )}
                </button>
            </div>
            <div className="">
                {activeTab === "about" && (
                    <div>
                        <p>
                            Welcome to Hotel Galaxy Prayagraj.<br></br>
                            At Hotel Galaxy Prayagraj, we take pride in
                            providing a luxurious and memorable stay experience
                            in the heart of the historic city of Prayagraj
                            (formerly known as Allahabad). Our commitment to
                            excellence and unwavering dedication to guest
                            satisfaction have made us a preferred choice for
                            travelers seeking comfort, convenience, and warm
                            hospitality.
                        </p>
                    </div>
                )}
                {activeTab === "features" && (
                    <div>
                        <p>Welcome to Hotel Galaxy Prayagraj.</p>
                    </div>
                )}
                {activeTab === "info" && (
                    <div>
                        <p>Welcome to Hotel Galaxy Prayagraj.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const SecondContainer = () => {
    return (
        <div className=" bg-pale-yellow">
            <div className="container mx-auto py-12 px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
                            Welcome to Hotel Galaxy Prayagraj
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            At Hotel Galaxy Prayagraj, we take pride in
                            providing a luxurious and memorable stay experience
                            in the heart of the historic city of Prayagraj
                            (formerly known as Allahabad). Our commitment to
                            excellence and unwavering dedication to guest
                            satisfaction have made us a preferred choice for
                            travelers seeking comfort, convenience, and warm
                            hospitality.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <img
                            src={room1}
                            alt="Hotel Galaxy Prayagraj"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <>
            <HeroWrapper title="About Us"/>
            <AboutUs />
            <FirstContainer />
            <SecondContainer />
            <Booking />
        </>
    );
};

export default About;
