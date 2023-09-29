import { Carousel, Typography, Button } from "@material-tailwind/react";
import RoomCard from "../components/roomCard/RoomCard";

// Importing icons
import { HiUser, HiBell } from "react-icons/hi";
import { GiRotaryPhone } from "react-icons/gi";
import { BsAlarm, BsKey } from "react-icons/BS";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { BiMap, BiHomeAlt2, BiPhoneCall } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";
import {
    FaBriefcaseMedical,
    FaHandsHelping,
    FaWifi,
    FaConciergeBell,
} from "react-icons/fa";
import {
    AiOutlineCar,
    AiOutlineSafety,
    AiOutlineStar,
    AiOutlineHome,
    AiFillStar,
} from "react-icons/ai";

// Importing Images
import room1 from "../assets/Images/room1.jpeg";
// import room2 from "../assets/Images/room2.jpeg";
import room3 from "../assets/Images/room3.jpeg";
import eventHall from "../assets/Images/eventHall.jpeg";
import image1 from "../assets/Images/img.jpeg";
import bath from "../assets/Images/bath.jpeg";
import logo from "../assets/logo.png";
import frontView from "../assets/Images/frontView.jpeg";
import bg from "../assets/bg.mp4"

import { useState } from "react";
import { BookNowBtn } from "../components/BookNowBtn";

// ABOUT US SECTION

const TabbedContent = () => {
    const [activeTab, setActiveTab] = useState("about");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-5 px-6 lg:px-5 lg:w-1/2 flex flex-col gap-6">
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
                        <p className=" text-p">
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
                        <p className=" text-p">
                            Welcome to Hotel Galaxy Prayagraj.<br></br>
                            At Hotel Galaxy Prayagraj, we take pride in
                            providing a luxurious and memorable stay experience
                            in the heart of the historic city of Prayagraj
                            (formerly known as Allahabad). Our commitment to
                            excellence and unwavering dedication to guest
                            satisfaction have made us a preferred choice for
                            travelers seeking comfort, convenience, and warm
                            hospitality..
                        </p>
                    </div>
                )}
                {activeTab === "info" && (
                    <div>
                        <p className=" text-p">
                            Welcome to Hotel Galaxy Prayagraj.<br></br>
                            At Hotel Galaxy Prayagraj, we take pride in
                            providing a luxurious and memorable stay experience
                            in the heart of the historic city of Prayagraj
                            (formerly known as Allahabad). Our commitment to
                            excellence and unwavering dedication to guest
                            satisfaction have made us a preferred choice for
                            travelers seeking comfort, convenience, and warm
                            hospitality..
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

// NEWS AND POSTS

const Event = () => {
    return (
        <>
            <section className="  relative  w-full  flex  flex-col justify-center items-center max-w-[1140px] pt-24">
                <h3 className=" text-h3 text-primary-color uppercase mb-4">
                    Hotel Galaxy
                </h3>
                <h2 className=" text-5xl font-medium capitalize">
                    Meetings & Events
                </h2>
                <div className=" w-full flex flex-col justify-center  md:grid md:grid-rows-3 md:grid-cols-4 h-[28rem] p-4 md:p-16 md:px-20 sm:px-4  mt-8 relative">
                    <div className=" row-start-1 row-span-1 col-start-1 col-span-1">
                        <img src={logo} alt="" className=" max-h-full" />
                    </div>
                    <div className=" row-start-2 row-span-2 col-start-1 col-span-3 z-10 relative clipping  text-white p-8 bg-[#222] ">
                        <h3 className="capitalize text-h2 mb-4 text-primary-color mt-6">
                            Hotel Galaxy
                        </h3>
                        <h2 className=" text-base text-white font-['Josefin_Sans'] font-normal">
                            Premium hotel in Prayagraj
                        </h2>
                        <h1 className=" text-base text-white font-['Josefin_Sans'] font-normal">
                            We welcome you in our prestigious Hotel
                        </h1>
                    </div>
                    <div className=" row-start-1 row-span-3 col-start-3 col-span-2 z-10 sm:z-0 md:z-0 lg:z-0  relative">
                        <img src={room3} className=" img-cover" />
                    </div>
                </div>

                <div className=" w-full flex flex-col justify-center  md:grid md:grid-rows-3 md:grid-cols-4 h-[28rem] p-4 md:p-16 md:px-20 sm:px-4  my-8 relative">
                    <div className=" row-start-1 row-span-1 col-start-4 col-span-1 flex justify-end">
                        <img src={logo} alt="" className=" max-h-full" />
                    </div>
                    <div className="  row-start-2 row-span-2 col-start-2 col-end-5 z-10 relative clipping-right text-white py-8 px-4 bg-[#222] flex flex-col items-center sm:items-end md:items-end lg:items-end">
                            <h3 className="capitalize text-h2 mb-4 text-primary-color mt-6 text-start">
                                Hotel Galaxy
                            </h3>
                            <h2 className=" text-base text-white font-['Josefin_Sans'] font-normal">
                                Premium hotel in Prayagraj
                            </h2>
                            <h1 className=" text-base text-white font-['Josefin_Sans'] font-normal">
                                We welcome you in our prestigious Hotel
                            </h1>
                    </div>
                    <div className=" row-start-1 row-span-3 col-start-1 col-span-2 z-10 sm:z-0 md:z-0 lg:z-0  relative">
                        <img src={room3} className=" img-cover" />
                    </div>
                </div>
            </section>
        </>
    );
};

//hero wrapper

const HeroWrapper = () => {
    return (
        <Carousel
            autoplay={true}
            loop={true}
            autoplayDelay={2000}
            className=" w-full h-screen"
        >
            <div className="relative h-full w-full">
                <img src={eventHall} className="h-full w-full object-cover" />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-filter">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography className=" text-primary-color text-lg  tracking-widest uppercase">
                            This is Luxury Hotel
                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-6xl font-[Cormorant_Garamond] text-white"
                        >
                            HOTEL GALAXY
                        </Typography>
                        <ul className=" h-[0.05rem] bg-primary-color w-full mb-4"></ul>
                        <Typography
                            variant="lead"
                            color="white"
                            className=" mb-6 lg:mb-12 opacity-80 font-[Josefin_Sans] text-xl lg:text-2xl"
                        >
                            Experience unparalleled luxury and comfort at our
                            exquisite hotel, where every moment becomes a
                            cherished memory
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button
                                size="lg"
                                color="white"
                                className=" rounded-none bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide"
                            >
                                Book Now
                            </Button>
                            <Button
                                size="lg"
                                color="white"
                                variant="text"
                                className=" rounded-none hidden md:block"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={image1}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-filter">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography className=" text-primary-color text-lg  tracking-widest uppercase">
                            This is Luxury Hotel
                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-6xl font-[Cormorant_Garamond] text-white"
                        >
                            SUPERIOR HOTEL IN PRAYAGRAJ
                        </Typography>
                        <ul className=" h-[0.05rem] bg-primary-color w-full mb-4"></ul>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-6 lg:mb-12 opacity-80 font-[Josefin_Sans] text-xl lg:text-2xl"
                        >
                            Experience unparalleled luxury and comfort at our
                            exquisite hotel, where every moment becomes a
                            cherished memory
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button
                                size="lg"
                                color="white"
                                className=" rounded-none bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide"
                            >
                                Book Now
                            </Button>
                            <Button
                                size="lg"
                                color="white"
                                variant="text"
                                className="rounded-none hidden md:block"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={frontView}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-filter">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography className=" text-primary-color text-lg  tracking-widest uppercase">
                            This is Luxury Hotel
                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-6xl font-[Cormorant_Garamond] text-white uppercase"
                        >
                            Premier Accommodation in Prayagraj
                        </Typography>
                        <ul className=" h-[0.05rem] bg-primary-color w-full mb-4"></ul>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-6 lg:mb-12 opacity-80 font-[Josefin_Sans] text-xl lg:text-2xl"
                        >
                            Experience unparalleled luxury and comfort at our
                            exquisite hotel, where every moment becomes a
                            cherished memory
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button
                                size="lg"
                                color="white"
                                className=" rounded-none bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide"
                            >
                                Book Now
                            </Button>
                            <Button
                                size="lg"
                                color="white"
                                variant="text"
                                className=" rounded-none hidden md:block"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

// MAIN CONTENT OF THE PAGE

const Home = () => {
    const roomsDetails = [
        {
            id: 1,
            roomType: "Deluxe Double Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: "url('../../src/assets/images/room2.jpeg')",
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 2,
            roomType: "Double Room",
            price: "499",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: "url('../../src/assets/images/room1.jpeg')",
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 3,
            roomType: "Superior Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: "url('../../src/assets/images/room2.jpeg')",
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
    ];

    return (
        <>
            <HeroWrapper />

            <div className="lg:h-28 md:h-auto m-auto bg-pale-yellow w-[80%] lg:w-[70%] -mt-20 lg:-mt-14 transform  flex flex-row flex-wrap justify-evenly items-center p-2">
                <div className=" w-28 h-24 flex flex-col justify-evenly p-0 md:p-2 sm:p-2 text-sm">
                    <p>Check-in</p>
                    <input
                        className=" bg-transparent border border-gray-300 p-2"
                        type="date"
                    />
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-0 md:p-2 sm:p-1 text-sm ">
                    <p>Check-out</p>
                    <input
                        className=" bg-transparent border  border-gray-300 p-2"
                        type="date"
                    />
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-0 md:p-2 sm:p-1 text-sm">
                    <p>Adult</p>
                    <select
                        className=" bg-transparent border border-gray-300 p-2"
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
                <div className=" w-28 h-24 flex flex-col justify-evenly p-0 md:p-2 sm:p-1 text-sm">
                    <p>Children</p>
                    <select
                        className=" bg-transparent border border-gray-300 p-2"
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
                <div className=" w-28 h-24 flex flex-col justify-evenly p-0 md:p-2 sm:p-1 text-sm">
                    <p>Rooms</p>
                    <select
                        className=" bg-transparent border border-gray-300 p-2"
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
                <div className=" w-28 h-24 flex flex-col justify-evenly p-0 md:p-2 sm:p-1 text-sm">
                    <button className=" bg-primary-color py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block">
                        Book now
                    </button>
                </div>
            </div>

            {/* INFORMATION */}
            <div className=" w-full h-auto flex lg:flex-row md:flex-row flex-col flex-wrap lg:gap-5 md:gap-10 justify-center items-center mt-20 ">
                <div className=" w-64 h-80 md:h-72 text-sm flex flex-col flex-wrap flex-shrink-0 justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out text-center px-4">
                    <BiMap className=" h-20 w-8" />
                    <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                    <p className=" text-p text-center">
                        Our hotel is located in the downtown and not too far
                        from airport and bus station so it is quite easy to find
                        us wherever you come from.
                    </p>
                </div>
                <div className="w-64 h-80 md:h-72 text-sm flex flex-col flex-wrap flex-shrink-0 justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out text-center">
                    <BiHomeAlt2 className=" h-20 w-8" />
                    <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                    <p className=" text-p text-center">
                        Visit hotel provides high-quality accommodation services
                        to clients that come to our city from all over the world
                        throughout the year.
                    </p>
                </div>
                <div className="w-64 h-80 md:h-72 text-sm flex flex-col flex-wrap flex-shrink-0 justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out text-center">
                    <AiOutlineStar className=" h-20 w-8" />
                    <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                    <p className=" text-p text-center">
                        With qualified and friendly staff and high level of
                        comfort, we are sure you will have a great experience of
                        staying at the Visit hotel.
                    </p>
                </div>
            </div>

            {/* FEATURES  */}
            {/* <section className=" relative w-full flex flex-col items-center justify-center pt-24">
                <div className=" w-auto h-auto flex flex-col lg:flex-row flex-wrap justify-center mt-24 mx-20 md:mx-8 sm:mx-0 max-w-[1140px]">
                    <div className=" w-[40%] lg:w-1/2 flex flex-row justify-center gap-3">
                        <img
                            src={image1}
                            alt="photo"
                            className=" w-56 h-72  mb-10"
                        />
                        <img
                            src={bath}
                            alt="photo"
                            className=" w-56 h-72  mt-10"
                        />
                    </div>
                    <div className=" w-[60%] h-auto lg:w-1/2 flex flex-col flex-wrap justify-between lg:p-4 item-center lg:items-start  m-5 sm:m-0">
                        <div className=" text-primary-color">Hotel Galaxy</div>
                        <div className=" text-3xl">
                            The right Apartment Hotel & Resort for you
                        </div>
                        <div className="colorful-div text-2xl font-bold p-2 flex flex-row justify-start w-full h-16">
                            <div className=" ">
                                <AiOutlineHome className=" w-10 h-10 text-primary-color" />
                            </div>
                            <div className="flex flex-col justify-start pl-4">
                                <p className=" ">5 Star hotel in Prayagraj</p>
                                <p className=" font-extrabold text-sm">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Unde, sit.
                                </p>
                            </div>
                        </div>
                        <div className="colorful-div text-2xl font-bold p-2 flex flex-row justify-start w-full h-16">
                            <div className=" ">
                                <AiOutlineHome className=" w-10 h-10 text-primary-color" />
                            </div>
                            <div className="flex flex-col justify-start pl-4">
                                <p className=" ">5 Star hotel in Prayagraj</p>
                                <p className=" font-extrabold text-sm">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Unde, sit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="relative w-full flex items-center justify-center pt-24">
                <div className="w-full max-w-[1140px] flex flex-col sm:flex-col md:flex-row lg:flex-row flex-wrap justify-around mx-4 lg:mx-auto">
                    <div className="w-full sm:w-full md:w-[40%] lg:w-[40%] flex flex-row justify-center items-center gap-4">
                        <img
                            src={image1}
                            alt="photo"
                            className="w-56 h-72 mb-4 max-w-full "
                        />
                        <img
                            src={bath}
                            alt="photo"
                            className="w-56 h-72 mt-4 hidden sm:block md:block lg:block max-w-full  "
                        />
                    </div>
                    <div className="w-auto sm:w-auto md:w-[40%] lg:w-[40%] p-4 flex flex-col justify-center items-center lg:items-start m-4">
                        <div className="text-primary-color text-2xl font-bold mb-4">
                            Hotel Galaxy
                        </div>
                        <div className="text-3xl text-center mb-4">
                            <p>The Right Apartment Hotel & Resort for You</p>
                        </div>
                        <div className="colorful-div text-2xl font-bold p-2 flex flex-row justify-start w-full">
                            <div className="w-10 h-10 text-primary-color">
                                <AiOutlineHome />
                            </div>
                            <div className="flex flex-col justify-start pl-4">
                                <p className="text-lg">
                                    5 Star Hotel in Prayagraj
                                </p>
                                <p className="font-extrabold text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Unde, sit.
                                </p>
                            </div>
                        </div>
                        <div className="colorful-div text-2xl font-bold p-2 flex flex-row justify-start w-full">
                            <div className="w-10 h-10 text-primary-color">
                                <AiOutlineHome />
                            </div>
                            <div className="flex flex-col justify-start pl-4">
                                <p className="text-lg">
                                    5 Star Hotel in Prayagraj
                                </p>
                                <p className="font-extrabold text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Unde, sit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}

            <div className=" md:mx-12 lg:mx-24 mt-0 lg:mt-16 flex justify-center flex-col items-center relative py-24">
                <div className=" text-4xl font-extrabold text-center">
                    Our Services & Amenities
                </div>
                <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                <div className="  w-full flex flex-row flex-wrap justify-around py-12">
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaWifi className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p className=" font-bold">Free Internet Access</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <BsAlarm className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p className=" font-bold">Wake up call on request</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <HiUser className="h-20 w-8 text-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>24 hours manager on duty</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <HiBell className=" h-20 w-8 text-primary-color" />
                        <p>24 hours room service available</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-end flex-col items-center transition-transform duration-500 transform hover:scale-110 ">
                        <FaFemale className=" h-8 w-8 fill-primary-color" />
                        <p>Women Experience Programme for female travelers</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110 ">
                        <AiOutlineCar className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>Self parking service</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaBriefcaseMedical className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>24 hours doctor available</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <MdOutlineLocalLaundryService className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>Laundry/Dry cleaning available</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <AiOutlineSafety className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>Safe-deposite facilities</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaHandsHelping className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>Daily turn down service</p>
                    </div>

                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <BsKey className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>Digital Key</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-start flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaConciergeBell className=" h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out" />
                        <p>ConciergeBell</p>
                    </div>
                </div>
            </div>

            {/* ROOMS  */}

            <div className=" w-full py-20 flex flex-col justify-center items-center mt-8 bg-pale-yellow">
                <div className=" text-primary-color">Hotel Galaxy</div>
                <div className=" text-3xl">ROOMS & HALLS</div>
                <div className="w-1/4 mb-24 h-0.5 bg-primary-color"></div>

                <div className=" relative w-full flex flex-wrap justify-center items-center gap-8 max-w-[1140px] px-6 lg:px-4">
                    {roomsDetails.map((item) => (
                        <RoomCard key={item.id} {...item} />
                    ))}
                </div>

                <div className=" text-lg items-center max-w-[1140px] px-6 lg:px-4">
                    <p className=" text-center my-8 text-xl mt-12">
                        Our hotel boasts a range of well-appointed rooms and
                        suites, each designed to provide you with a restful
                        retreat. Whether you are here for a business trip, a
                        family vacation, or a pilgrimage, our accommodations
                        offer a serene ambiance and contemporary amenities to
                        ensure a relaxed stay.
                    </p>
                </div>
            </div>

            {/*   ABOUT US */}

            <section className=" relative w-full flex flex-col items-center justify-center py-24">
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center lg:m-14 md:m-10 max-w-[1140px]">
                    <div className=" w-[50%] group flex justify-center">
                        <div className="lg:w-96 lg:h-64 md:w-64 md:h-44 w-64 h-44 mb-4 mr-4 border-2 border-black absolute transition-transform transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                        <div className=" lg:w-96 lg:h-64 md:w-64 md:h-44 w-64 h-44 mt-4 ml-4 relative flex-shrink-0 transition-transform transform group-hover:-translate-x-4 group-hover:-translate-y-4 ">
                            <img
                                src={room1}
                                alt="Hotal Galalxy"
                                className=" w-full"
                            />
                        </div>
                    </div>

                    <TabbedContent className=" w-[50%]" />
                </div>
            </section>
            {/* URBAN SPACE */}

            <div className="relative w-full md:h-[35rem] h-[30rem]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 object-cover w-full h-full"
                >
                    <source src={bg} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-filter2 px-8">
                    <div className=" text-primary-color text-lg">
                        Hotel Galaxy
                    </div>
                    <div className=" text-3xl text-center my-4">
                        <h2 className=" text-white text-h1 mb-12 leading-[3rem]">
                            A Warm, Exquisite, Practical and Urban Space
                        </h2>
                    </div>
                    <BookNowBtn />
                </div>
            </div>

            {/* BOOKING FORM  */}

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
                            Each of our guest rooms feature a private bath,
                            wi-fi, cable television and include full breakfast.
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
                    <div className="w-full lg:w-[60%]  flex flex-col flex-wrap justify-center items-center bg-secondory-color py-8">
                        <div className=" flex w-full justify-center items-center gap-6">
                            <div className=" w-[30%] flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm bg-pale-yellow">
                                Check-in
                                <input
                                    className=" bg-transparent border border-gray-300 p-4"
                                    type="date"
                                />
                            </div>
                            <div className="w-[30%]  flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm ">
                                Check-out
                                <input
                                    className=" bg-transparent border  border-gray-300 p-4"
                                    type="date"
                                />
                            </div>
                        </div>
                        <div className=" flex w-full justify-center items-center gap-6">
                            <div className=" w-[30%] flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">
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
                            <div className=" w-[30%] flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">
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
                        <div className=" flex w-full justify-center items-center gap-6">
                            <div className=" w-[30%] flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">
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
                            <div className=" w-[30%] flex justify-end flex-col p-4 md:p-2 sm:p-1 text-sm">
                                <BookNowBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full flex flex-col items-center justify-center py-4 pb-8">
                <Event />
            </section>
        </>
    );
};

export default Home;
