import HeroWrapper from "../components/HeroWrapper";
import RoomCard from "../components/roomCard/RoomCard";
import room1 from "../assets/Images/room1.jpeg";
import room2 from "../assets/Images/room2.jpeg"

const CardWrapper = () => {
    const roomsDetails = [
        {
            id: 1,
            roomType: "Deluxe Double Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: { room1 },
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 2,
            roomType: "Double Room",
            price: "499",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: { room2 },
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 3,
            roomType: "Superior Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: { room1 },
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 4,
            roomType: "Deluxe Double Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: { room2 },
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 5,
            roomType: "Double Room",
            price: "499",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: { room1 },
            description:
                "Architecture viverra tristique ustoni an missten vitae diam   neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra neclacus.",
        },
        {
            id: 6,
            roomType: "Superior Rooms",
            price: "599",
            brief: "38m2/2 beds/1 bathroom",
            bgImg: { room2 },
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
            <div className=" relative w-full flex flex-wrap justify-center items-center gap-8 max-w-[1140px] px-8">
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
            <HeroWrapper title="rooms"/>
            <CardWrapper/>
        </main>
    );
};

export default Rooms;
