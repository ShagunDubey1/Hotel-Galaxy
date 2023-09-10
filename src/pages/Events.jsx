import HeroWrapper from "../components/HeroWrapper";
import room3 from "../assets/Images/room3.jpeg";
import logo from "../assets/logo.png";


const EventCard = () => {
    return (
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
                <div className=" row-start-2 row-span-2 col-start-1 col-span-3 z-10 relative clipping text-white p-8 bg-[#222] ">
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
                <div className="  row-start-2 row-span-2 col-start-2 col-end-5 z-10 relative clipping-right text-white py-8 px-4 bg-[#222] flex flex-col items-end">
                    <div className=" w-[40%]">
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
                </div>
                <div className=" row-start-1 row-span-3 col-start-1 col-span-2 z-10 sm:z-0 md:z-0 lg:z-0  relative">
                    <img src={room3} className=" img-cover" />
                </div>
            </div>
        </section>
    );
}
const Events = () => {
    return (
        <>
            <HeroWrapper title="Meetings & Events" />
            <main className=" relative  w-full  flex justify-center items-center">
                <EventCard />
            </main>
        </>
    );
};

export default Events;
