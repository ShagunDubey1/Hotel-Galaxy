// Importing icons 
import { BsAlarm, BsKey} from 'react-icons/BS';
import { GrUserManager, GrRestroomWomen} from 'react-icons/gr';
import {AiOutlineCar, AiOutlineSafety} from 'react-icons/ai';
import {FaBriefcaseMedical, FaHandsHelping, FaWifi, FaConciergeBell} from 'react-icons/fa';
import {MdOutlineLocalLaundryService} from 'react-icons/md';
import {FcManager} from 'react-icons/fc';
// import {IoWomanOutline} from 'react-icons/io';

// Importing Images
import room1 from "../assets/Images/room1.jpeg";
import room2 from "../assets/Images/room2.jpeg";
import eventHall from "../assets/Images/eventHall.jpeg";


const Home = () => {
    return (
        <>

            <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/5868075/pexels-photo-5868075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex justify-center items-center text-center text-white flex-col relative">
                <div className="font-fnt text-5xl"><p className=' font-extrabold'>SUPERIOR HOTEL IN PRAYAGRAJ</p></div>
                <div className=" font-bold">Luxury & Lifestyle That is rare, Premium & Top of the World</div>

            </div>
            <div className="h-28 m-auto bg-pale-yellow w-4/6 absolute  -mt-14  left-1/2 transform -translate-x-1/2 flex flex-row justify-around">
                <div className="w-1/6 flex justify-center flex-col p-4 text-sm">Check-in
                    <input className=" bg-transparent border border-gray-300" type="date" />
                </div>
                <div className="w-1/6 flex justify-center flex-col p-4 text-sm ">Check-out
                    <input className=" bg-transparent border  border-gray-300" type="date" />
                </div>
                <div className="w-1/6 flex justify-center flex-col p-4 text-sm">Adult
                    <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
                <div className="w-1/6 flex justify-center flex-col p-4 text-sm">Children
                    <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
                <div className="w-1/6 flex justify-center flex-col p-4 text-sm">Rooms
                    <select className=" bg-transparent border border-gray-300" name="check-in" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
                <div className="w-1/6 flex justify-center flex-col p-4 text-sm">
                    <button className="h-8 w-full bg-orange-400 border-2 border-gray-300 transition duration-300 ease-in-out group hover:bg-gray-200 hover:border-orange-400">Book now</button>
                </div>
            </div>

            {/* SERVICES */}
            <div className=" md:mx-12 lg:mx-24 mt-16 flex justify-center flex-col items-center">
                <div className=" text-4xl font-extrabold">Our Services & Amenities</div>
                <div className="w-1/3 h-0.5 bg-primary-color mx-auto my-4"></div>
                <div className="  w-full flex flex-row flex-wrap justify-around">
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaWifi className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p className=' font-bold'>Free Internet Access</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <BsAlarm className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p className=' font-bold'>Wake up call on request</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        {/* <GrUserManager className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/> */}
                        <FcManager className='h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>24 hours manager on duty</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <GrUserManager className=' h-20 w-8 fill-primary-color '/>
                        <p>24 hours room service available</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110 ">
                        <GrRestroomWomen className=' h-20 w-8 fill-primary-color '/>
                        {/* <IoWomanOutline className='h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/> */}
                        <p>Women Experience Programme for female travelers</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110 ">
                        <AiOutlineCar className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Self parking service</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaBriefcaseMedical className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>24 hours doctor available</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <MdOutlineLocalLaundryService className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Laundry/Dry cleaning available</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <AiOutlineSafety className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Safe-deposite facilities</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaHandsHelping className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Daily turn down service</p>
                    </div>
                    
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <BsKey className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>Digital Key</p>
                    </div>
                    <div className=" w-52 h-32 m-1 text-center flex justify-center flex-col items-center transition-transform duration-500 transform hover:scale-110">
                        <FaConciergeBell className=' h-20 w-8 fill-primary-color hover:fill-blue-950 transition duration-500 ease-in-out'/>
                        <p>ConciergeBell</p>
                    </div>
                </div>

                {/*   ABOUT US */}


                <div className="flex flex-col md:flex-row lg:flex-row justify-around w-full flex-wrap ">
                    <div className=' lg:w-1/2 w-full  relative group'>
                        <div className="w-96 h-64  mb-4 mr-4 border-2 border-black absolute transition-transform transform group-hover:translate-x-4 group-hover:translate-y-4">
                            
                        </div>
                        <div className=" w-96 mt-4 ml-4 absolute bg-blue-300 transition-transform transform group-hover:-translate-x-4 group-hover:-translate-y-4">
                            <img src={room1} alt="Hotal Galalxy" className=' w-full'/>
                        </div>
                    </div>
                    <div className=" p-5 lg:w-1/2 flex flex-col justify-around">
                        <div className=" text-4xl font-extrabold ">About us</div>
                        <div className="w-1/3 h-0.5 bg-primary-color "></div>
                        <div className="">Welcome to Hotel Galaxy Prayagraj.<br></br>
                            At Hotel Galaxy Prayagraj, we take pride in providing a luxurious and memorable stay experience in the heart of the historic city of Prayagraj (formerly known as Allahabad). Our commitment to excellence and unwavering dedication to guest satisfaction have made us a preferred choice for travelers seeking comfort, convenience, and warm hospitality.
                        </div>
                    </div>
                </div>


                
                
            </div>
        </>
    )
}

export default Home;