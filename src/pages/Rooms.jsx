import { IoChevronForward } from "react-icons/io5";
// import { img } from "../../public/images/img.jpeg"

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
                        our rooms
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

const Rooms = () => {
    return (
        <main>
            <HeroWrapper />
        </main>
    );
};

export default Rooms;
