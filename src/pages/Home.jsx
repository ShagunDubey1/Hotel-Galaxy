// Importing icons 
import {FcManager} from 'react-icons/fc';
import {GiRotaryPhone} from 'react-icons/gi';
import {BsAlarm, BsKey} from 'react-icons/BS';
import { IoChevronForward } from "react-icons/io5";
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineLocalLaundryService} from 'react-icons/md';
import {GrUserManager, GrRestroomWomen} from 'react-icons/gr';
import {BiMap, BiHomeAlt2, BiPhoneCall} from 'react-icons/bi';
import {FaBriefcaseMedical, FaHandsHelping, FaWifi, FaConciergeBell} from 'react-icons/fa';
import {AiOutlineCar, AiOutlineSafety, AiOutlineStar, AiOutlineHome, AiFillStar} from 'react-icons/ai';


// Importing Images
import room1 from "../assets/Images/room1.jpeg";
import room2 from "../assets/Images/room2.jpeg";
import room3 from "../assets/Images/room3.jpeg";
import eventHall from "../assets/Images/eventHall.jpeg";
import image1 from "../assets/Images/img.jpeg";
import bath from "../assets/Images/bath.jpeg";
import logo from "../assets/logo.png"


import { useState } from 'react';


// HERO WRAPPER 

const HeroWrapper = () => {
    return (
        <section
            className="w-full  overflow-hidden h-[27rem] bg-cover bg-center bg-no-repeat  flex justify-center items-center text-center text-white flex-col relative"
            style={{
                backgroundImage: "url('../../src/assets/images/img.jpeg')",
            }}
        >
            <div className=" bg-filter absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex justify-center items-center flex-col">
                <div className="  pb-4">
                    <h1 className=" text-[3.25rem] font-normal capitalize">
                        rooms
                    </h1>
                    <img></img>
                </div>
                <div className=" font-bold">
                    <p className="  text-p uppercase flex justify-center items-center gap-3 font-normal">
                        home <IoChevronForward /> <span>rooms</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

// ABOUT US SECTION 

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='p-5 lg:w-1/2 flex flex-col gap-6'>
        <div className=" text-3xl font-semibold flex flex-row justify-start gap-6">
            <button
                className={activeTab === 'about' ? ' text-primary-color' : ''}
                onClick={() => handleTabClick('about')}
                >
                About
                {activeTab === 'about' && (
                    <div className=" bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                )}
            </button>
            <button
                className={activeTab === 'features' ? ' text-primary-color' : ''}
                onClick={() => handleTabClick('features')}
                >
                Features
                {activeTab === 'features' && (
                    <div className=" bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                )}
            </button>
            <button
                className={activeTab === 'info' ? ' text-primary-color' : ''}
                onClick={() => handleTabClick('info')}
                >
                Info
                {activeTab === 'info' && (
                    <div className=" bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                )}
            </button>
        </div>
        <div className="">
            {activeTab === 'about' && (
            <div>
                <p>Welcome to Hotel Galaxy Prayagraj.<br></br>
                        At Hotel Galaxy Prayagraj, we take pride in providing a luxurious and memorable stay experience in the heart of the historic city of Prayagraj (formerly known as Allahabad). Our commitment to excellence and unwavering dedication to guest satisfaction have made us a preferred choice for travelers seeking comfort, convenience, and warm hospitality.</p>
            </div>
            )}
            {activeTab === 'features' && (
            <div>
                <p>Welcome to Hotel Galaxy Prayagraj.</p>
            </div>
            )}
            {activeTab === 'info' && (
            <div>
                <p>Welcome to Hotel Galaxy Prayagraj.</p>
            </div>
            )}
        </div>
    </div>
  );
}


// NEWS AND POSTS

const Event = () => {
    return (
        <>
            <div className=" flex flex-col justify-center  md:grid md:grid-rows-3 md:grid-cols-4 h-96 p-4 md:p-16 md:px-20 sm:px-4  my-8 relative">
                <div className=" row-start-1 row-span-1 col-start-1 col-span-1">
                    <img src={logo} alt="" className=' max-h-full'/>
                </div>
                <div className=" row-start-2 row-span-2 col-start-1 col-span-3 bg-primary-color z-10 relative clipping text-white p-6">
                    <h3 className=''>Hotel Galaxy</h3>
                    <h2>Premium hotel in Prayagraj</h2>
                    <h1>We welcome you in our prestigious Hotel</h1>
                </div>
                <div className=" row-start-1 row-span-3 col-start-3 col-span-2 z-10 sm:z-0 md:z-0 lg:z-0  relative">
                    <img src={room3} className=' img-cover'/>
                </div>
            </div>
        </>
    )
}




// MAIN CONTENT OF THE PAGE

const Home = () => {
    return (
        <>
            <HeroWrapper />
            {/* <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/5868075/pexels-photo-5868075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex justify-center items-center text-center text-white flex-col relative">
                <div className="font-fnt text-5xl"><p className=' font-extrabold'>SUPERIOR HOTEL IN PRAYAGRAJ</p></div>
                <div className=" font-bold">Luxury & Lifestyle That is rare, Premium & Top of the World</div>
            </div> */}
            
            <div className="lg:h-28 md:h-auto m-auto bg-pale-yellow w-5/6  -mt-14 transform  flex flex-row flex-wrap justify-evenly items-center">
                <div className=" w-28 h-24 flex flex-col justify-evenly p-4 md:p-2 sm:p-2 text-sm">
                    <p>Check-in</p>
                    <input className=" bg-transparent border border-gray-300" type="date" />
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-4 md:p-2 sm:p-1 text-sm ">
                    <p>Check-out</p>
                    <input className=" bg-transparent border  border-gray-300" type="date" />
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-4 md:p-2 sm:p-1 text-sm">
                    <p>Adult</p>
                    <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-4 md:p-2 sm:p-1 text-sm">
                    <p>Children</p>
                    <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-4 md:p-2 sm:p-1 text-sm">
                    <p>Rooms</p>
                    <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
                <div className=" w-28 h-24 flex flex-col justify-evenly p-4 md:p-2 sm:p-1 text-sm">
                    {/* <button className="h-8 w-full bg-orange-400  transition duration-300 ease-in-out group hover:bg-gray-200 hover:border-orange-400">Book now</button> */}
                    <button className=' bg-primary-color py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block'>Book now</button>
                </div>
            </div>


            {/* INFORMATION */}

            <div className=" w-full h-auto flex lg:flex-row md:flex-col flex-wrap lg:gap-5 md:gap-10 justify-center items-center mt-20">
                <div className=" w-56 h-52 md:h-72 text-sm flex flex-col flex-wrap justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out text-center">
                    <BiMap className=' h-20 w-8'/>
                    <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                    <p className=' p-1'>Our hotel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</p>
                </div>
                <div className="w-56 h-52 md:h-72 text-sm flex flex-col flex-wrap justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out text-center">
                    <BiHomeAlt2 className=' h-20 w-8'/>
                    <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                    <p className=' p-1'>Visit hotel provides high-quality accommodation services to clients that come to our city from all over the world throughout the year.</p>
                </div>
                <div className="w-56 h-52 md:h-72 text-sm flex flex-col flex-wrap justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out text-center">
                    <AiOutlineStar className=' h-20 w-8'/>
                    <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                    <p className=' p-1'>With qualified and friendly staff and high level of comfort, we are sure you will have a great experience of staying at the Visit hotel.</p>
                </div>
            </div>


            {/* FEATURES  */}

            <div className=" w-auto h-auto flex flex-col lg:flex-row flex-wrap justify-center mt-24 mx-20 md:mx-8 sm:mx-0">
                <div className=" w-4/5 lg:w-1/2 flex flex-row justify-center gap-4">
                    <img src={image1} alt="photo" className=' w-52 h-72  mb-10'/>
                    <img src={bath} alt="photo" className=' w-52 h-72  mt-10'/>
                </div>
                <div className=" w-full h-auto lg:w-1/2 flex flex-col flex-wrap justify-between lg:p-4 item-center lg:items-start  m-5 sm:m-0">
                    <div className=' text-primary-color'>Hotel Galaxy</div>
                    <div className=" text-3xl">The right Apartment Hotel & Resort for you</div>
                    <div className="colorful-div text-2xl font-bold p-2 flex flex-row justify-start w-full h-16">
                        <div className=" ">
                            < AiOutlineHome className=' w-10 h-10 text-primary-color'/>
                        </div>
                        <div className="flex flex-col justify-start pl-4">
                            <p className=' '>5 Star hotel in Prayagraj</p>
                            <p className=' font-extrabold text-sm'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sit.</p>
                        </div>
                    </div>
                    <div className="colorful-div text-2xl font-bold p-2 flex flex-row justify-start w-full h-16">
                        <div className=" ">
                            < AiOutlineHome className=' w-10 h-10 text-primary-color'/>
                        </div>
                        <div className="flex flex-col justify-start pl-4">
                            <p className=' '>5 Star hotel in Prayagraj</p>
                            <p className=' font-extrabold text-sm'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sit.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* SERVICES */}

            <div className=" md:mx-12 lg:mx-24 mt-16 flex justify-center flex-col items-center relative">
                <div className=" text-4xl font-extrabold text-center">Our Services & Amenities</div>
                <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                <div className="  w-full flex flex-row flex-wrap justify-around">
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaWifi className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p className=' font-bold'>Free Internet Access</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <BsAlarm className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p className=' font-bold'>Wake up call on request</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FcManager className='h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>24 hours manager on duty</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <GrUserManager className=' h-20 w-8 text-primary-color '/>
                        <p>24 hours room service available</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110 ">
                        <GrRestroomWomen className=' h-20 w-8 fill-primary-color '/>
                        <p>Women Experience Programme for female travelers</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110 ">
                        <AiOutlineCar className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Self parking service</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaBriefcaseMedical className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>24 hours doctor available</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <MdOutlineLocalLaundryService className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Laundry/Dry cleaning available</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <AiOutlineSafety className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Safe-deposite facilities</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaHandsHelping className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Daily turn down service</p>
                    </div>
                    
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <BsKey className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Digital Key</p>
                    </div>
                    <div className=" w-48 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaConciergeBell className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>ConciergeBell</p>
                    </div>
                </div>
            </div>



            {/* ROOMS  */}

            <div className=' w-full py-20 flex flex-col justify-center items-center mt-8 bg-pale-yellow'>
                <div className=' text-primary-color'>Hotel Galaxy</div>
                <div className=" text-3xl">ROOMS & HALLS</div>
                <div className="w-1/4 mb-4 h-0.5 bg-primary-color "></div>
                
                <div className="w-full flex flex-row flex-wrap justify-center gap-4">
                    <div className=" w-60 h-64 relative">
                        <div className="w-full h-full absolute top-0 left-0" style={{ background: 'linear-gradient(180deg, #00000080 0%, #DBA76BB3 100%)' }}></div>
                        <img className='h-full' src={room2} alt="Room" />
                        <div className="absolute inset-0 flex flex-col pl-8 pb-8 justify-end text-white">
                            <p className="text-lg font-semibold">Room</p>
                            <p className=' text-sm'>2 beds / bathroom</p>
                        </div>
                    </div>
                    <div className="w-60 h-64 relative">
                        <div className="w-full h-full absolute top-0 left-0" style={{ background: 'linear-gradient(180deg, #00000080 0%, #DBA76BB3 100%)' }}></div>
                        <img className='h-full' src={eventHall} alt="Event Hall" />
                        <div className="absolute inset-0 flex flex-col pl-8 pb-8 justify-end text-white">
                            <p className="text-lg font-semibold">Event Hall</p>
                            <p className=' text-sm'>Full capacity EventHall</p>
                        </div>
                    </div>
                    <div className="w-60 h-64 relative">
                        <div className="w-full h-full absolute top-0 left-0" style={{ background: 'linear-gradient(180deg, #00000080 0%, #DBA76BB3 100%)' }}></div>
                        <img className='h-full' src={eventHall} alt="Event Hall" />
                        <div className="absolute inset-0 flex flex-col pl-8 pb-8 justify-end text-white">
                            <p className="text-lg font-semibold">Event Hall</p>
                            <p className=' text-sm'>Meeting space available</p>
                        </div>
                    </div>

                </div>
                
                <div className=' text-lg items-center'>Our hotel boasts a range of well-appointed rooms and suites, each designed to provide you with a restful retreat. Whether you are here for a business trip, a family vacation, or a pilgrimage, our accommodations offer a serene ambiance and contemporary amenities to ensure a relaxed stay.</div>
            </div>


            {/*   ABOUT US */}

            <div className="flex flex-col md:flex-row lg:flex-row justify-end  flex-wrap lg:m-14 md:m-10">
                <div className=' lg:w-1/2 w-full group'>
                    <div className="lg:w-96 lg:h-64 md:w-64 md:h-44 mb-4 mr-4 border-2 border-black absolute transition-transform transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    <div className=" lg:w-96 lg:h-64 md:w-64 md:h-48  mt-4 ml-4  relative transition-transform transform group-hover:-translate-x-4 group-hover:-translate-y-4">
                        <img src={room1} alt="Hotal Galalxy" className=' w-full'/>
                    </div>
                </div>
                
                
                <TabbedContent />

            </div>


            {/* URBAN SPACE */}
            
            <div className="relative w-full h-64">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 object-cover w-full h-full"
                >
                    <source src="https:\/\/www.youtube.com\/watch?v=zr4r3n5Smho&quot" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex flex-col justify-evenly items-center ">
                    <div className=' text-primary-color'>Hotel Galaxy</div>
                    <div className=" text-3xl text-center">A Warm, Exquisite, Practical and Urban Space</div>
                    {/* <button className="h-8 w-24 bg-orange-400 border-2 border-gray-300 transition duration-300 ease-in-out group hover:bg-gray-200 hover:border-orange-400">Book now</button> */}
                    <button className=' w-28 bg-primary-color py-3 text-white text-md uppercase hover:bg-white hover:border hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block'>Book now</button>
                </div>
            </div>



            {/* BOOKING FORM  */}

            <div className="w-full h-auto md:h-96 lg:p-24 bg-cover bg-center bg-no-repeat bg-[url('')] flex flex-col lg:flex-row md:flex-row justify-center items-center gap-4 p-4 bg-cyan-400">
                <div className=" w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 h-80 flex flex-col justify-evenly sm:p-0 md:p-4 lg:p-6 xl:p-6 ">
                    <div className="">
                        <div className=' flex flex-row text-primary-color '><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                        <p className=' text-3xl text-primary-color'>Feel free to Call us anytime!</p>
                    </div>

                    <p>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</p>

                    <div className=' flex flex-row flex-wrap items-center gap-4'>
                        <span><RiCustomerService2Fill className='w-12 h-20'/></span>
                        <div className="">
                            <p className=' flex flex-row font-sans text-sm items-center gap-1'><BiPhoneCall/> +91-9918901686 || <GiRotaryPhone />0532-2400507 </p>
                            <p>For more information</p>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 flex flex-row flex-wrap justify-center items-center bg-secondory-color h-60">
                        
                    <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm bg-pale-yellow">Check-in
                        <input className=" bg-transparent border border-gray-300" type="date" />
                    </div>
                    <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm ">Check-out
                        <input className=" bg-transparent border  border-gray-300" type="date" />
                    </div>
                    <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">Adult
                        <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="1">5</option>
                            <option value="2">6</option>
                        </select>
                    </div>
                    <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">Children
                        <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="1">5</option>
                            <option value="2">6</option>
                        </select>
                    </div>
                    <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">Rooms
                        <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="1">5</option>
                            <option value="2">6</option>
                        </select>
                    </div>
                    <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">
                        {/* <button className="h-8 w-full bg-orange-400 border-2 border-gray-300 transition duration-300 ease-in-out group hover:bg-gray-200 hover:border-orange-400">Book now</button> */}
                        <button className=' bg-primary-color py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block'>Book now</button>
                    </div>
                </div>
            </div>

            
            <Event />
        </>
    )
}

export default Home;