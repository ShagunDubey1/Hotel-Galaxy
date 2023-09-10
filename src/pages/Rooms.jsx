import { IoChevronForward } from "react-icons/io5";
import RoomCard from "../components/roomCard/RoomCard";

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

const CardWrapper = () => {
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
        {
            id: 4,
            roomType: "Deluxe Double Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: "url('../../src/assets/images/room2.jpeg')",
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 5,
            roomType: "Double Room",
            price: "499",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: "url('../../src/assets/images/room2.jpeg')",
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 6,
            roomType: "Superior Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: "url('../../src/assets/images/room2.jpeg')",
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
    ];

    return (
        <section className=" relative w-full flex flex-col items-center justify-center py-24">
            <h3 className=" text-h3 text-primary-color uppercase mb-4">
                Hotel Galaxy
            </h3>
            <h2 className=" text-5xl font-medium capitalize mb-12">
                Rooms & Halls
            </h2>
            <div className=" relative w-full flex flex-wrap justify-center items-center gap-8 max-w-[1140px]">
                {roomsDetails.map((item) => (
                    <RoomCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

const Rooms = () => {
    return (
        <main>
            <HeroWrapper />
            <CardWrapper />
        </main>
    );
};

export default Rooms;
