import { BsAlarm } from 'react-icons/BS';
import { GrUserManager } from 'react-icons/gr';
// import {IoWomanOutline} from 'react-icons/io';

const Home = () => {
    return (
        <>

            <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/5868075/pexels-photo-5868075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex justify-center items-center text-center text-white flex-col relative">
                <div className="font-fnt text-5xl">SUPERIOR HOTEL IN PRAYAGRAJ</div>
                <div className="font-fnt">Luxury & Lifestyle That is rare, Premium & Top of the World</div>

            </div>
            <div className="h-28 m-auto bg-pale-yellow w-4/6 absolute  -mt-14  left-1/2 transform -translate-x-1/2 flex flex-row justify-around font-fnt">
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
            <div className=" mx-24 mt-16 flex justify-center flex-col items-center">
                <div className=" text-4xl font-fnt">Our Services</div>
                <div className="  w-full flex flex-row flex-wrap justify-around">
                    <div className=" w-52 h-36 m-1 border rounded border-black ">
                        <BsAlarm />
                    </div>
                    <div className=" w-52 h-36 m-1 border rounded border-black ">
                        <GrUserManager />
                    </div>
                    <div className=" w-52 h-36 m-1 border rounded border-black ">
                        <GrUserManager />
                    </div>
                    <div className=" w-52 h-36 m-1 border rounded border-black ">
                        {/* <IoWomanOutline /> */}
                    </div>
                    <div className=" w-52 h-36 m-1 border rounded border-black ">
                        {/* <AiOutlineCar /> */}
                    </div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                    <div className=" w-52 h-36 m-1 border rounded border-black "></div>
                </div>
            </div>
        </>
    )
}



export default Home;